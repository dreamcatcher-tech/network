
>[!tip] Created: [2023-04-19 Wed 16:05]

>[!question] Targets: 

>[!danger] Depends: 

Be able to run an effect in multiple places, roll up the results into a quorum checking function in the DMZ, 

Likely this is done by including the host ID along with any wrapped actions that are pierced back into the chain.  If the config has a quorum model specified for side effects, then the pierced actions are not unwrapped until the quorum parameters are met.

This also requires some form of quorum election, where the hosts will have to decide and record who the current participants are.

Which peerId should be running any given effect is written in the chain itself, and elections are triggered by chains piercing the `.@@io` channel attempting to trigger an effect election.