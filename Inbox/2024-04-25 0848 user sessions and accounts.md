
>[!tip] Created: [2024-04-25 Thu 08:48]

>[!question] Targets: 

>[!danger] Depends: 

- someone comes in anonymously
	- for the first time
	- returning
	- refreshes the tab
- someone becomes authenticated via github
	- their work is transferred to their authenticated home account

In a remote repo like the CRM, how will users safely authenticate with it.

Users needs read permissions to the repo and write permissions, where writes should go thru a session chain.

Would the users want to have multiple sessions open with multiple repos ?
Their clients seem simpler if all session activity came into a single chain, and then that was relayed out to a direct connect

If the session / network chain with the CRM was used by multiple user sessions, then the USER looks like a single entity fo the CRM even tho the SESSIONs may be different.

If one tab passes auth, then all other tabs should move to being authenticated.
If anon home shared history with all home accounts, then the branch can be moved easily.
Anon could be the system chain but without proper credentials.
Maybe all system actions are possible in any home chain, provided account has credit.
User / Home chains handle sessions and making repos

Booting goes:
- system home / superuser
- anon chain ?
- home repo ?



Actors: Entities in the system, represented by an Actor repo
- The first actor is the super user
- Users, which are represented by a special repo
- Orgs, which are a type of user controlled by other users
Sessions: Devices authenticated as an Actor, which are a branch of the user repo
Repos, representing a git repo, which are controlled by an Actor repo

The two special users are the superuser and the anonymous user

Sessions are typically used to dispatch to the HAL repo, which is what the GUI is set up to interact with.  There is not predisposition to HAL in this system, but it is primarily intended to be used in this pattern.

To use with HAL, users upsert the HAL repo, which is there by default when their accounts were created, then start a network branch with that repo.
The anon chain starts with a HAL repo, which is its only allowed thing.
This HAL helps it to authenticate, allowing customization of HAL and working with other repos.


Error was treating the system like it was dedicated to HAL, but it is in fact a general system that is command line only, with one of its uses being Dreamcatcher.
Artifact is pure computation, and when composed in a certain way, it is the Dreamcatcher.

In this model, a user can see the activity of all of its sessions across all its devices, and snip any of them off.  They can see the net interactions that they have with all other repos on the system, regardless of whether they own them or not.  Owning means simply paying the bills.

Other repos have no business knowing what sessions a user used to send comms out with.

Is there a relationship between user session with the user account, and sessions in HAL ?
What if HAL wants to make some changes to the CRM ?

Session would start a new branch of HAL, using the `createSession` command.
So first we would make a new session with our user account, then we would upsert the HAL repo, then make a new branch within that repo for our specific session.
So now we have two sessions - one with the user account, and one with our HAL.
?? Could HAL be system level then ? Makes it subject to central upgrades ?

The account session is how we get instructions into the system.
A new tab would have an existing session with the user account, which could have a prior session with HAL.

Once a user is logged in, they can repoint their home repo at the HAL repo to work on their own fork of HAL.