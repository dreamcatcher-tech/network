
>[!tip] Created: [2023-11-06 Mon 09:35]

>[!question] Targets: 

>[!danger] Depends: 

If we are the engine that makes a pulse, and we are configured to be the side effect runner, then at pulse creation, we should run the side effects, if there are no consensus nodes that we need approval for ?

Otherwise, when a new pulse is formed, we would then rerun the pulse, in a different isolation context, and then get the side effects out of that, running them and consequently piercing them back into the chain.

The piercing might cause a consensus to occur when multiple nodes are submitting side effect results.

The cleanest long term way is to use the top level Interpulse object, which has access to all resources, to listen to when new pulses are formed that we are configured as the side effect runner.

This would listen to every new pulse created, and check it to see if we should side effect it.

If we should, then rerun the pulse in the isolation context.  Error if the end result doesn't match the supplied pulse, otherwise use the whispered functions to run and supply results back to the chain.

But if we were the pulse proposer, we should be able to change the permissions of the isolation box to allow it to run these side effects ?  But, if we want to switch back later to continue on making a new pulse, we would have to switch the side effects back, but we may have residues.  Overall then, it is cheaper, and safer, to run a dedicated and separate IsolateContainer that replays the pulses.

This implies that high compute items should have been handled by an action, so that side effect replay is excused from doing any heavy lifting.