
>[!tip] Created: [2025-09-17 Wed 13:19]

>[!question] Targets: 

>[!danger] Depends: 

problem is that once we move to coco, we might have to dump a bunch of stuff.
if we can run in coco, we can run dark edge.

also worried that pushing on with the cobbled bits might be inefficient due to being able to switch to have agents help me work on.

because we are doing dynamic name resolution, we need to expose a service to get a machine id from a name, and to find our own name.

Because this can change based on the parent, we need a service to get this.

if we never bind to the public ip on fly, then no other machine can gain entry.
so if we just somehow block processes from binding, then it means you can only access services using fly proxy.

so if we make a dns service, like ?whoami then we return back what the external dns name of that machine is.

faces get told what their hostname is at instantiation, but they would have to expressly rerequest that.

the agents check this value constantly, and can be expressly told that their address has changed.
when they get told, they query the 

later, the names will be available using a git repo, so they subscribe to that repo, and read the config from there, making things available agentwide.

make an mcp server that can retrieve the hostnames from somewhere stable, like a git repo, and then return it for you, so that agents are fetching hostnames regularly, and when they get renamed, they are instantly aware.

the views the agent reports are then updated whenever its hostname changes.