
>[!tip] Created: [2025-05-01 Thu 10:15]

>[!question] Targets: 

>[!danger] Depends: 

use individual app ids and only allow certain email accounts to sign up.

then the server code is the same and access is managed entirely with privy.

but we need some kind of standard way to intro new users to the hamr login ?

this would be inside the ui, it would act specially, and probably hard code the did of the repo they want to access ?

in the repo, we would add their dids once they become known ? or just anyone with a valid login can join.

how to make a way to have multiple users on the app ?
Let's make a simple permissions system on each repo that gets checked for a DID that is allowed to do anything at all in a repo. We start with, you either can or you can't, and it covers all permissions in an all-or-nothing type of model. 

So for Hammer, each user would get their own repo. The UI would have the public key of the CRM hard-coded into it. 
When they dispatch actions, the actions would have their legitimate DID within it, so the Privy Auth Check would make sure that the DID and the action match the authenticated Privy DID.
Then, when the action is set to target the CRM repo, the receiving system would check the action against the auth settings in the repo. To read the auth settings in the repo, it would also check the parent tree to see if any of the parents provide actions that can be merged down to determine what this action should be. 

The permission system can be tested as a tree of JSON objects that we can write simple tests for. And then all it changes when we deploy it against the repositories is the mechanism of walking or retrieval. So if we just abstract what walk means, then we can go through and merge permissions up the tree. 

We can run the test env for hamr on the same space as test for general dreamcatcher, with access control in privy contolling who can access which system.

the hamr ui can probe the main repo for access and can request it if it doesn't have it.
stucks might be a good message format to request access.  This should be a platform managed service almost ?