
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

the agen