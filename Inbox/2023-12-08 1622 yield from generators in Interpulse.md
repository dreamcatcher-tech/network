
>[!tip] Created: [2023-12-08 Fri 16:22]

>[!question] Targets: 

>[!danger] Depends: 

If we allow subscribing to state changes, and in changes to slices to state, we could make dedicated slices in the state that represents yields to actions, and are indexed by the RequestId.

These get blanked each new pulse.

Benefit is that we do not pollute the channel with these extra information, some of which might be transient.

So why not do all replies this way, particularly if we allow reply in any order ?