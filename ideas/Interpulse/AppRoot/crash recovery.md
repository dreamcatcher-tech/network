>[!tip] Created: [2022-09-14 Wed 21:34]

>[!question] Targets: [[Interpulse]]

>[!danger] Depends:

Upon restart, the engine may not have run to exhaustion.  Key to recovery is being able to start processing again from external stimulus and update only those things that had not been updated at the time of the crash.

Requirements:

1. Continue processing [[PulseChain]]s in the [[App Complex]] that have unsettled actions
2. Determine what further processing is required without walking every chain as the number of chains may be large

Tasks required for recovery from crash:

## Resend in flight transmissions

Any transmissions from any pierced chain need to be resent.  The engine would not have allowed the next pulse to be made for the pierced chain until all the transmissions were sent, but those interpulses and their consequences may not have settled when the crash occured.
Any remote mounted chains may have started some transmissions too, but these are handled in mtab recovery.

Starting with the pierce chain, see if any transmissions have not yet settled.  If not, then these chains may need further processing.  Walking the tree in this sense will eventually lead to an exhaustion of all consequences from the initial transmissions from point of stimulus.

If all pierce requests are traced through the system, and all resulting updates rippled up to approot, then we are fully recovered.

We will need to flag which channels are still unsettled to, to aid crash recovery efforts.  Any channel still in tension will need to be traced to its target to check if any further execution is required of it.

This is another benefit of all comms with remote chains occuring thru socket chains.  The sockets can be treated as tho they are pierced, and act as a source of external stimulus, rather than interacting with chains internal to the app complex directly.

## Complete any updates to approot

During recovery tracing, updates may be required to the approot that would not have happened, so these need to be acted upon.  These should be deterministic, as the [[Order of Updates]] matters.  Updates pending do not affect the [[Tension]] status of the chain.

## Restart any subscriptions in mtab

The [[mtab]] chain contains information on what remote chains need to be kept track of.  These should be restarted and updated if needed.

## Options

### AppRoot update required for completion

Could we simply not treat any pierce action as being done until the result has come back and the approot is updated ?  So too with remote chains - their actions are not accepted until the approot contains their response ?

Basically, we always know the approot will be recovered correctly, so why not use that as the guarantee that a remote action has been processed successfully ?

Problem is this still leaves the [[App Complex]] with partially processed chains in the event of a crash, and no way to restart processing without walking them all.

### AppRoot tension tree

Could update the approot with a flag indicating tension or not, so that upon recovery, we know exactly what to go looking for, rather than tracing all sources of piercings directly ?

If any action makes it to the approot, then we know it will be both recovered, and processing will continue.  This gives a more general solution than just tracking pierce actions alone, since we could allow pierce to occur anywhere in this solution.  Without this solution, approot needs to know where every pierced chain is, and needs to check it for recovery.

Could the updates be done first, and only after fully sent to the approot, transmissions occur ?

### Update AppRoot directly

Could the approot be updated directly, skipping the updates of the parents, since we know immediately what the impact will be ?  Means the update can get to the approot faster, and with no additional Request processing slowing this down in the parent hops.  But this will remove opportunity for pooling many requests together in the parents, buffering the immense load that could fall upon the approot.
