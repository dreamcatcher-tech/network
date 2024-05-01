
>[!tip] Created: [2024-05-01 Wed 11:56]

>[!question] Targets: 

>[!danger] Depends: 

anon actor names being a pubkey is convenient, but breaks format, since actors have a different format.

If they all had the same format, then auth status would be independent, and to do upgrades inside HAL would require knowledge of the exact machineId and the previous ulid for the anonymous user.

The machine knows its own pid, so when it gets created, it should store its PID, so that when it changes, we can walk backwards and get the previous version.

It is a little more indirection, but maintains uniformity.

Being anonymous or not shouldn't matter - what matters is that an oauth loop either annoints a ulid as an authenticated actor id, or merges an existing actorId with a new one.

Upon merge, the incoming id is deleted, and the persistent one remains.

The first ulid to be authenticated is the actorid.

But, what would stop a machine changing between two authenticated actorIds, and the new one grabbing the old actors sessions ?

Should the auth service store the actorIds that were merged ?

If the home branch stored if the actor had any kind of auth decorator, then only an anonymous user could be merged in.

Or, make the auth service store the mappings of anon to authed actorids ?

If the home branch was trusted execution, then we could rely on merged in ids being correct.

When sessions get started with HAL, they start with a hook that watches when the machine is moved, and causes HAL to update everything when this happens.

But what if multiple auth providers bond actorIds together differently ?

If a provider is registered with the home chain, then it has the ability to merge actorIds together.
Calling an auth provider would establish the mapping between machineIds and actorIds and github userIds, but would not do the actual merging.

So it really only needs to store the userId from github mapped to an actorId.
Then from the home chain, the machine would call for itself to be merged with the base actorId.
This would be a no-op if we currently were the authenticated actorId.

Who does the merging ?

Merging should be a function of the home isolate, not the auth providers.  
So an auth provider registers with the home isolate.

Whenever a new actor is created in HAL, then it hooks the actorId it is following, and is notified when changes occur, so it can keep its model in sync.  The hook should be sticky in that it triggers and follows, so no matter how rapidly subsequent merges occur, it will always receive a notification.  Basically whenever a branch is merged, pid change triggers are fired and then immediately reinstantiated on the merge target, so nothing is ever missed.

