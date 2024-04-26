
>[!tip] Created: [2024-04-23 Tue 09:07]

>[!question] Targets: 

>[!danger] Depends: 

The engine would stay the same thruout.


We need to see when new branches have been created.
Pierce needs to watch everything in order, since this is one way to see new branches created.
Unless we notify of new branches separately - a DB function that watches the change of the head values.

Watch the head keys and send down notice when new branches are formed and deleted
Splice they could watch a glob patter for PIDs, or have a 'with children' flag so that child splices are sent down too ?
So if branches had glob patterns, then we would watch for keys that were children of this one.

If a fresh anonymous device turns up, how can it be granted some session activity before logging in ?

When a browser first comes in, create a temporary home chain based on the browser fingerprint.
If you then authenticate, any sessions you have created will be moved to your new authenticated chain.

When you delete your account, you are encouraged to push it all to a github repo as an export.

This home chain is where your analytics are kept.

The engine will start a default session, and will attempt to log in using existing credentials.

Anon session will make a dedicated request to get an anonymous PID.

What is a session a branch of ?

Session connections should be allowed in any repo.  So if I model the moneyworks db as a repo in chainland, and pierce it with a connection to the server, then it can interact with the CRM, and all its activities can be audited by anyone with access.

Can store the ownership of a repo in the repo config file.  Upstream is like the control ?
If we force this modification to be strictly controlled, then it should stay safe.

gh service publishes a public key that it will sign with.
When users login with oauth, the ghservice stores the tokens, and it sends a signed token over to the user repo.  The user repo authenticates using git by providing the token it was given to log in.
The app should hook into the gh service which resolves when the token is invalid, which runs as a daemon, so as soon as the token expires, the app gets kicked.

Read access is given to the owner of the repo.  Ownership can be set in the io.json file ?

Each repo should have a key that is stored in the io.json file as public, and it requires matching sig to be able to drive forwards ?