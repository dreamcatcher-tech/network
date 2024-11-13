
>[!tip] Created: [2024-11-13 Wed 12:29]

>[!question] Targets: 

>[!danger] Depends: 

So we have a client library that allows host comms from the browser.

At that point, the host runs the things you tell it to run.

The fact that it runs some personal stuff is unrelated.

So auth needs to be separate.

As the browser, you first pass challenges to ascertain what host environment you want to gain access to.  This can be related to the challenge, so once you log in, you immediately have access.

The host should have a default environment for you, where you can see other hosted environments that you have access to - these are your repos.

So this particular host uses privy for login.
Then it uses some particular stripe processor for payments.
Once logged in, your browser gets the base repo.
From the base repo, you can see your other repos.
The base repo is what communicates with remote repos to enable social collaboration features.

Login gives you a repoid.
Request the latest processing commit from the repoid.
Read in the rest of the repo from there, to know what you want to do next.

Host functions:
1. pierce in actions for a given process
2. await the outcome of those pierced actions
3. read dirs and files from the repo
4. await dirs and files changes from the repo

Making a payment updates the balance the hold holds for you, which it provides a readonly link to your repo.  An area of your repo that the host will not let you change.

Engine is then something that awaits external authenticated triggers saying that a new user just got created.  So hosts need an interface that allows for new IDs to be inserted into the system, and needs to set up some base repos, which is what the ids and payment systems would be connected to.

The server says what is the base repo the authenticated user can access.  From there, they can figure out what else they can access.  They should be able to pierce in to any other repo, since their auth would cause the target parent heirarchy to be looked up, and then if their auth gives access to the parent, they can access the child.