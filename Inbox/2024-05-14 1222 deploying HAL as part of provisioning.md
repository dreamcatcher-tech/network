
>[!tip] Created: [2024-05-14 Tue 12:22]

>[!question] Targets: 

>[!danger] Depends: 

Home has to be installed as a special case, then github gets installed as the superuser, but what about HAL ?

Artifact provision is the basis of identity, and must be part of every engine.

Github may not need to be, as this is separate to the provisioning effort.

List of env vars of installations to make
require some kind of oneshot install script when doing provisioning
name a script of commands to execute when booting, like a boot isolate that provisions the server
a flag in main.ts that causes provision to be especially heavy.

Pass in provisioning info to Server.create() so that main.ts can provision it as something different, using HAL as a deployed app, done by the super user.

Pass in a serverconfig object that has everything required.

Pass in a provisioning function that does any extra installs that might be required
cradleMaker() would take a serverconfig object, which would get provisioned as required.

But what about deploying HAL as tho it was an app, set up by any normal person ?

Need some kind of public registry, so that if people want to, they can share some apps.
As a new machine joining the dreamcatcher, how can i discover the address of HAL ?
How can I know it is the HAL I want ?

Superuser could allow some repos to be publicly browsable ?
We know the home address - should super user be a common name ?
Should there be some well known actor names ?


Start with a DNS service that is managed by superuser, until we have something more elegant.
Could be as simple as package scope names.

So should superuser be an advertised account ?
Is the DNS actually a user, and it can be read from ?

Home lists the superuser account, and could also list a directory account as well, as a well known address.
In one query, we should be able to get all the well known addresses that we need.