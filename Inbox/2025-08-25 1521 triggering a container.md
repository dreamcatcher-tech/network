
>[!tip] Created: [2025-08-25 Mon 15:21]

>[!question] Targets: 

>[!danger] Depends: 

I'm in artifact, via mcp connection, with the basic tools create_worker and resume_worker and list_workers

I then create a new worker with no changed prompts.

? then I get the address of this worker and I mcp into it ?

under the hood, the fly infrastructure mcp fires up and is used to create a new machine with the specified base image.

? is this just a napp format ? all this config ?

it's going to boot a container which runs codex from a binary AND has checked out the code.
so we can build up the provisioning sequence, but being able to trigger an agent from an mcp call should be all we need ?

looking at the proctree, should how to find an agent id like this ?
booting the agent is just booting its path ?

to boot an agent simple find

?? should the booting itself run in an agent, so we have this admin level agent that boots with privileges ?

start with a raw programming call, that calls fly and tries to resume a machine if present in the proctree, or creates one if not present.

Either way, a discrete call comes in from somewhere to artifact requesting and agent to boot.

so run it all on defaults first, with no repo, just boot and talk.
then visibility, so we can see it and know what its doing.

the agents start all frozen or all unspawned.  artifact triggers them by calling the fly mcp server.

secrets are managed per app, so we could make a hosting manager app that had a base agent that was the thing that made the mcp calls.

so this hosting agent, it may be capable of many concurrent sessions, and it has the fly mcp server locally inside it.

It then runs with this config, and does the instructions it was told to do, using the mcp server that was supplied, which is the fly one.  That agent should be a derived image, from the base image, that has different tooling attached, and then the prompting is done dynamically from the entry point call.

this is instead of running via artifact where the agent mcp server is accessed via the artifact gateway, which seems to make it simpler and have less indirection ?

entry point call is a web call  ?
could be an ssh call ?
web call comes in with an api key


if the hosting was an app, then it has its own secrets and everything, and then we just set up new users inside their own apps.
So long as we can codex chat with the hosting app somehow ?  This should probably just take fixed strings, as the trigger would be rather high security.

shelling into a running machine and using codex on the cli would help with debugging.

Make another app that routes calls to the machines, based on machine id and permissions ?
or is this perhaps artifact itself that knows how to do this ?