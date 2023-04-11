
>[!tip] Created: [2023-03-10 Fri 20:46]

>[!question] Targets: 

>[!danger] Depends: 

If a new crisp is created, then it should hold the prior crisp until it is fully loaded.

isLoading should, if true, ask the previous crisp, which would ask its previous crisp, stopping at the last loaded crisp, or when there are no more priors.

hasChild, if not true, should ask predecessors.

Generally, if we are still loading, return the last view that the gui was given.

All responses should be cached for repeat questioning being stable.

## Testing
Control the way the updater works, to force updates to dribble out.
Provide Syncer with a hooked resolver, so we can tick it over one lookup at a time.