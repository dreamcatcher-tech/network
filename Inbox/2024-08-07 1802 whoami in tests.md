
>[!tip] Created: [2024-08-07 Wed 18:02]

>[!question] Targets: 

>[!danger] Depends: 

If we start every test as superuser, then we can make before steps that change the actor identity.

Need a `before-state` which uses only the state that the prior thread used, and runs a new thread, so we can change a system state, then we can change identities, and then operate in that thread.

May need to make the test frame work identity aware, so that we can masquerade as someone else for the purposes of testing.