
>[!tip] Created: [2024-06-25 Tue 11:48]

>[!question] Targets: 

>[!danger] Depends: 

Run a service onsite and have it controlled by a repo running on deno cloud.
Receives its instructions from git based commands, and interacts with the cloud hosted versions.

Means we don't need the process manager itself, as we can gather all those stats ourselves ?

Maybe it could be a github hosted runner, which periodically triggers and pulls from the db ?

Run our own crons or permanent processes.

Seems like it is a machine, that gets joined to an actor.

We could start it up, and so long as we auth it to one of our actors, it will stay bound there.

Hopefully it can handle deno updates, and artifact updates gracefully.

Ideally this is part of an electron release that also installs and configures a service.

Machine acts as a host for some side effects.