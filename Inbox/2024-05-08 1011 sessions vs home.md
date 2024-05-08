
>[!tip] Created: [2024-05-08 Wed 10:11]

>[!question] Targets: 

>[!danger] Depends: 

If the sessions were connected to /dev, then we would make a separate repo named /home where all the users home stuff goes.

So for a user to do an rm, it would be removing from their list of repos, where the only place they can store it is /home or /repos

Given no logins, we would not have any other chains there, so can just proceed knowing there is no collision.

For cloud tests, we should authenticate somehow, with something, so we can have a repeatable test session.

Auth in with simply a password based thing, so if we present the same password, we can come in, or if we prove a private key, we can come in.

OR just keep the same machine keys for test, and only ever sign in with that.

ls of a repo is different again.

/machines/
/actors/actor1/

children could be listed in the io.json file, of the master branch ?
But is the child repo the child of a specific branch, or the full repo ?
Since it is the billing arrangement, it should be at the repo level.
It should be in the config since it is a layer above the branch interactions.

But if actors are branches, how can an Actor own a repo ?

Billing parent should be very cheap to look up, and should be included in the pid ?

Do users even need to be making their own repos, in order to use HAL ?

How is the relationship of parent and child carried on between git checkouts ?
Is it only within the context of chainland that this relationship exists ?

The chain config, and whom it accepts controls from should be in the git repo somewhere.
The root io.json seems the appropriate place to set this.
If a child branch wants to create a new repo, then it needs to contact the root branch, and this would then make the request to system.

Multi parent means the bill is split how ?

Cloning where there is no .io.json means what ?

But which is the master branch and where is this stored ?

What does free floating mean ?  So not everything needs a parent ?

ls all the repos should read from the base branch 

???? should the base branch hash be part of every action anyway ?
So in .io.json, each commit we always say what the head of main branch is, to have consistent view of the inter repo states ?

Branches still coordinate with each other in a trusted single execution environment.
Inter repo can be arbitrarily delayed.
Branches can be forked, so a new version can occur that gets merged back in ?

Branches are used to model actors and machines, since these are processes in the real world, and they all fork a single repo, so that control of the rules can be maintained, so that identity on the platform has integrity.

For each Actor, we also have 

Or, the repos are free floating, and have a link bank to the actorId that pays for them
Surrender needs to leave a marker so next time some billing occurs, the pointers are moved ?
So each actor can have a branch to represent the repos that they control ?

If the control or billing was stored in a repo, then it needs a commit whenever the actor changes, which seems reasonable.
Ideally we would have this pointer in one place, and it gets updated ?
Is it a hosting repo, or a repo repo ?
then when the billing agent changes, it just gets updated here.
Repos could have child repos, and this would be held in this one large repo ?

Home should hold the accounting rules for all the repos it hosts.
Make an independent id for the billing entity of repos, then when the actor moves, this gets repointed 

The namespaces of these repos must not clash when an actor surrenders to another actor.
So repo names can only really be related to github, and nothing else.

Billing pointer can go in the `.git` folder, which can ultimately point to an actorId



