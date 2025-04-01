
>[!tip] Created: [2025-03-31 Mon 09:45]

>[!question] Targets: 

>[!danger] Depends: 

So before the deployment launches, we could run a command in fly that ensures that we have a super repo set, which the host uses.

It is best to remain db agnostic, and only ever use repos.

When the standard environment first boots, it would make a super repo, which is a repo like any other, but this one is what the auth system uses to track everything.

Is a child repo required to acknowledge its parent ?
Probably not.

actor becomes just a repo that can parent other repos, which is something all repos should be able to do.

Repos we own could be stored like remotes in git config ?
Use the submodules feature ?

So we might use the config file to store all the submodules, rather than our own custom format ?

Or we could store in an on disk format, in files.

This is probably best.  since unlimited in scale.

Repo relationships can be in different modes:
1. owner
2. shared owner
3. accessible

If you have access, it means that you have some ACL access to these repos.
Owner means the repo knows about you directly.

The super repo holds owner relationships to all the actors.
The super repo is how DIDs are looked up to find the actor repo they point to.

So how to embue these basic functions onto the `artifact-consensus` branch ?

We would turn these problems into filesystem problems, rather than database problems.

Can the auth setup be used by the super repo to grant access to the actor repos ?

delegated permissions, so when someone wants to access a repo, we also check the parents of the repo to see if the did is allowed.

init tools should be part of every repo, since it sets up the parent child relationship ?

Is auth an repo links the same thing, really ?

Can we have deffered permissions, so a child which is owned would check its parent for permissions too.
Very simple to add actors di

actors control becomes a napp then ?
add auth, init and clone - just napps that modify the filesystem in a fixed way ?

Some branches must be able to limit what napps can be run on them.

if we had a tip object and a commit object, how would we go about storing repo info and auth details ?

we need a mapping to lookup dids to repos.
the browser needs to be told what repos it can access.
that is probably a `super.ls()` call, then just see what comes back.
super is a special address that is well known to the system.

But want a way to turn auth into repo control.
May do roles and add them to the config object for each did.

```ts
// filesystem paths sharded by the dids
{
	'did:privy:asdfasdf': {
		'@self': {
			// permission on self
			spawn // ability to spawn new repos
		},
		'did:repo:ffffff': {
			// permissions on its home repo
		}
	}
}

// roles as a config.json in the root of the auth folder, which says what all the roles that are referenced here are


```


? how would the first hosting repo get made ?
should it read from an env var and make a repo using the private keys from the env var ?

When we want to know if an actor is valid, the system reads from the super repo and looks up the did in the repo.

So for all tests, we must create the super repo first, since this gets used to then make the actor repo.

How do we attach the actor tools to every repo ?
Actor tools are when we are acting like an actor, and creating children, and managing children.

Can we make the friends list actually just be a permissions list ?
Would be those advertising the friends api data, and that you can read.

These commands can remain in the `@artifact/provider/actor` napp, but they are executed "on" the target repo.  Just like the current ones require the provider sends to a valid actor repo.
So you could send actor commands to any repo, but only if they had the right permissions, would it work.

the auth config is consulted before any action gets deployed.

call `super.ls()` to figure out what repos you have access to.
When you first sign up, we will create a base actor repo for you.

The super could be a well know name, so browsers can always communicate with it.

So how to make the first one, since all the others check their parents for permission ?
Need a little seed function, that can only be used to make a repo free from a parent, and only if none other exist.  We could also make the self repo if it wasn't found ?

clone could use a temp id branch, and then when done, go make one that forks from the last commit of the main branch.

init can be the first commit is the actual id branch, then the main branch is forked off this singular commit.

The first commit need not be done, it can be done as part of the flush operation, since the tip can contain everything.
After clone, we would fork the head of the main branch.
After init, we would do a single commit, on the default branch, and then we would fork that, to ensure we always have shared lineage.

Reading blobs, trees, commits might be useful separated from anything that interacts with the .git dir for anything other than object storage.

Run seed within a container to make sure it runs ?
It has to be run this way anyway, since it needs to be received by an action ?

Write a special key to the blob store: `@self` which will point to the self repo.

`tree` is what we should rename actor operations to.