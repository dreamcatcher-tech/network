
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
{
	'did:privy:asdfasdf': {
		'': {
			// permission on self
		},
		'did:repo:ffffff': {
			// permissions on its home repo
		}
	}
}
```
