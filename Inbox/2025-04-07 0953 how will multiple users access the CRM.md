
>[!tip] Created: [2025-04-07 Mon 09:53]

>[!question] Targets: 

>[!danger] Depends: 

Each one comes in and has their own home repo created.

One of them would have created the CRM repo.

This repo needs to be shared with the others somehow.  So the repo might be hard coded into the UI ?  So the provisioning takes place in an admin UI that is application agnostic, then we take those pubkeys and hard code them in to the specific UI for the CRM app.

Since its all the same did, then the name can just be a child of the only actor in the system.

So somehow or other, there is a well known repo that holds the CRM.

the users to access the repo need to be registered in the auth slice of the repo. 
Initially, all users share the same hard-coded DID until we can get user accounts up and working. 
We would have hardcoded the token, hardcoded the DID, and hardcoded the repository key. 

The auth SHOULD check against the repo, but we can skip that and consider anything allowed in the system as ok.

So in this case, we don't need to create a repo for each person ?
If the did is the same, they would have created a new one at boot.
Come in on the admin UI, or make the UI auto create the CRM if it is missing.



dispatch of actions:
we will do execution in band, in the receiving process.
