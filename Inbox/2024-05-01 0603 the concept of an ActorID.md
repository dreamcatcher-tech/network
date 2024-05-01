
>[!tip] Created: [2024-05-01 Wed 06:03]

>[!question] Targets: 

>[!danger] Depends: 

Inside chainland, we need to model users with a stable actorId.
This should contain info about the actor.
Actors can make shadow actors.


So HAL doesn't care that you have a github auth, HAL cares what actorid you are mapped to.

HAL should, upon session creation, subscribe to a change in actorId, and update its records accordingly.

Or, as part of any session interaction, it should do migrations upon first action as the new actorid

The requester now needs to be aware that the account moved since they got an upgrade.

Or, HAL can keep everything at the machine level the whole time ?

If actorId is a ulid, and all machines are generated one, then they use external auth services to link / merge these actorids together.

If HAL stored all machineIds too, then it could better handle movement in the machine.
If a machine becomes bonded to an actorId, HAL should update its model.
If the machine then becomes unbonded, HAL would not update.

If the machine stores what its anon actorId was, then it can access any old sessions ?

Need a way to clearly indicate anon actorids

The migrated session should have the HAL session copy up until point of migration, so it could clone it over ?