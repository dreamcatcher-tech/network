
>[!tip] Created: [2025-03-27 Thu 19:32]

>[!question] Targets: 

>[!danger] Depends: 

The repo being the unit of control.
Sign up to privy.io to get your account.

So at all times we always store all the data we have available in the actors repo, that they can download any time they like.  We can block the private data branch unless you want to delete your account, since once that data is gone, we cannot guarantee the integrity of the system.

We can map out secrets to hashes, where the value is inserted only during outbound calls.
The secrets map is stored in the actor store, but it is not extractable.

Our access to user info should be no more than just seeing who is on there, and other stats.  Probably everyone else should be able to see this too.
The secrets are encrypted, but all else should be visible from the outside.
We should not be able to see inside the actor repos.
Anyone should be able to see what we can from the management repo, which is links to all the repos.

Actors are repos, and we the hosting platform auth browser sessions in based on these repos.
All other repos are free floating, but some can be bound by their ACL to be under the control of other actors, either exclusively, or shared.
Lastly, a repo can control other repos, arbitrarily deep.  This is making a repo act like an org, as it can optionally be controlled by other actors, or it can be independent.

So is an agent a complete repo ? or just a branch ? or does an agent only exist inside a repo ?

The repo ACL list would be linked to dids, along with some roles.
Each repo could be a did that gets resolved using a custom resolver.

Repos must be able to communicate across repos, in an authenticated way.
They could mount, as in permanently share data, they could live mount, where the data is kept current, or they could send actions.

How can users be invited to repos ?
A repo could offer either open invite requests, or it must reach out to add you.

So our auth instance simple acts as an identity provider that is trusted by our hoster.

For the CRM, we could restrict access by email address ? or specific dids ?
So someone creates the crm repo, then they can search for users, or add them by a specific email address that they will allow ?

Each actor is always acting as the actor repo.  This is the connection between the hosting environment and the repos.