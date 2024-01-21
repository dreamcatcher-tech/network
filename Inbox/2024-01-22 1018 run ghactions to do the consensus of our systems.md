
>[!tip] Created: [2024-01-22 Mon 10:18]

>[!question] Targets: 

>[!danger] Depends: 

Can publish snapshots to npm perhaps ?
Can provide attestations using the attestation services github and other provide, to prove that the state is xyz and that the operation ran on their infrastructure from the commits that were given.

So, if the system gets into a known good state, then we should be able to show that it stayed in a known good state.

They will defend their servers from corruption, and we will run in a guaranteed environment, using only the data in git.

So when someone PRs, then we can guarantee we have run our code correctly, and made our AI calls correctly.

They will also handle spam mitigation, since the PRs would come from their registered users.

So the ghaction would run, then it would sign the build, then push this signed commit up to the new master.  Then it would run again if there were new commits in.

So we would run the SLSA github runner so that the execution of the chain master was done in an attestable manner, then allow clients to verify that it was run correctly.  Multiple users could do these runs, so that the running can be cycled around, using ghactions, spreading the rewards around.

Then we can at least run a reliable, safe environment, without problems with the infrastructure being trusted, which is a huge complication for any project.  Being able to have multiple people have reasonably trustworthy infrastructure is quite powerful, and should provide us a stable platform to build up to be able to run untrusted infrastructure.

Run the OpenSSF scorecard on our repos within the action.  Publish that as part of the root.