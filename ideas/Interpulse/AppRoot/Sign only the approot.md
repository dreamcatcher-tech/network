
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

Problem might be that serving chains might give away the approot path, but this could possibly be masked.

## Rapid complex verification
In a large collection, the children would have all been signed by a different approot, which if verified would require the fetching and verification of each approot, costing much download ability.  But if the inclusion of the hash chain in the latest approot is sufficient, we can accept just that top level signature.  Finding the approot of the last change seems unnecessary.

This is reverse lookup of the signature, instead of treating the signature as attached to the child pulse, we treat the child pulse as attached to the approot, and gets signed each time an approot is generated.

This means a pulse can have potentially many signatures, but has only one signature for each change it makes.  To pinpoint the last change and its signature, use lineage to get the previous pulse for the child chain.  Walk the supervisor tree up to approot to get signature.  Verify the lineage from current approot to prior approot to ensure authenticity.

Transmits should only accept the signature of the latest pulse, rather than any subsequent one.  This approot can have its changes walked to get the latest pulse.  Tranmission is only valid for this pulse and no others, since it is the one that should have been triggered to do the transmission work.

Instead of pointer to previous pulse, store a pointer to previous approot.  If path had changed for a pulse, should record these moves somewhere ?

## Perf Benefits
Browser reinstantiation of pulses can skip signature verification on every pulse, shaving 1ms or so off the load process.  For 20k pulses, this saves about 20 seconds on initial load.

Interpulses can signal that an update is due to a subscribed app complex, as they would have received the root, and can know that it is the same root as some subscribed complex.

## Reducer isolation
Based on the publisher provenance, we can run covenants in the same isolation boundary to save time.  It should be possible to have different isolation boundaries between different chains in the same approot.

## Nested Approots