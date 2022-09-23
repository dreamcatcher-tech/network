>[!tip] Created: [2022-09-23 Fri 13:36]

>[!question] Targets: [[requests/Interpulse]]

>[!danger] Depends: 

Plan is to provide a side effect function in a Covenant that has the same signature as a reducer, but is triggered by outgoing actions from the `.@@io` channel.  It would optionally have the ability to pierce back in to the chain by sending requests back in on the same channel.

In the Engine model, the user is modelled as a side effect function that cannot receive any actions.

## Teaming
Being able to reach consensus on side effects is a possible extension. There are two ways to provide this:
### Rerunning in consensus
Validators rerun the side effects and then pass the block if the same responses came back in from the side effect function.  This seems complicated and would require modifications to the consensus model to check for these operations
### Rollup to a higher chain
Run the side effects in multiple places, and then roll up the results into a pure chainland chain, doing quorum or other filter types on the provided raw side effects.

This is a much cleaner solution as side effects are treated as a singular instance running somewhere, and coordinated results are compared in a replayable and auditable fashion.