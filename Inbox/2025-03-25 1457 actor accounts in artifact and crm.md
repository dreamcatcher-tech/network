
>[!tip] Created: [2025-03-25 Tue 14:56]

>[!question] Targets: 

>[!danger] Depends: 

If we treat it like github, where each person can have a username and several repos, and then when you control a repo, you can invite them to the repo.

So one actor would start in the universe.
Then they create a repo, called crm.  They might make it an org, or they might leave it as belonging to them.
Then a second actor joins.
They communicate somehow and the first one invites the second one in to the repo.
Then they can both see the repo.


When we deploy the UI, it would auto clamp to the crm repo, rather than giving people their own stand alone view.
We might need to oauth them if the go straight to the crm and they haven't authed with privy.  After authing, if they have been added to the repo, they would be allowed to access it.

So the CRM is just a UI that presets a lot of the artifact config values to a specific repo.