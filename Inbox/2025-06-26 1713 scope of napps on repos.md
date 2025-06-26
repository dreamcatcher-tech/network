
>[!tip] Created: [2025-06-26 Thu 17:13]

>[!question] Targets: 

>[!danger] Depends: 

installed napps would be attached in the genesis branch.

the path they control would be a branch pattern and a path.

so it could be installed on just one branch, or on all.

it would act exactly like a commit hook.

to install a napp, we would have a folder in the genesis branch that the napp was installed on, so that we have a central place that can instantly be interrogated, we can ensure no conflicts, and check whenever writing occurs.  plus when processing, we already have the current branch, so only have to look in one place.

? how does a frame and a napp relate ?
? how to name a napp in a transclude ?

installation process
need a @install function ? gives the napp a chance to do some setup and config, and check the state of the filesystem ?
needs to be given a path that it can access to.
it can check it has been granted the permissions it has asked for.


read them with a useNapps hook.
artifact needs provider functions to interact with napps.  But this is just filesystem mechanics.
it could be a napp that governs the write access to the napps folder anyway.  the napp napp.

? how does this fit into the process tree ?

? how does this napp get invoked ?
requires:
- a napp name, based on the install name, or based on a transclude ?

Installing the napp napp allows that napp, as part of the install, to install other napps.