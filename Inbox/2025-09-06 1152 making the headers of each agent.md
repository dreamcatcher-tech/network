
>[!tip] Created: [2025-09-06 Sat 11:52]

>[!question] Targets: 

>[!danger] Depends: 

make a web server then attach different features at different routes.

attach the view proxy, where it proxies thru to another agent, but also where it proxies thru to a view.

General proxy ability seems the goal ? if it was just a complete proxy passthru service that is the header ?

running as a root agent seems different, as this *could* use actual proxying, but fly replay seems best there since no load, and make the redirect permanent.

header of the agent can just be a proxy thing that routes around based on faceids ?

processes might write the face config to disk, and it just reads it.


so if anything received a fly request in, then it does fly replay to send to the correct agent, based on the path.  it *might* check its own metadata and ensure that it is the root agent.

starting a face is just doing something like starting a web mcp server.
- face-mcp
- interaction-mcp

all these faces are registered with the header, using internal function calls, 
is the header itself controlled by mcp server ?
so to start the face-mcp face, which is one of the defaults, the header services boots it up, registers the face, and proxies all traffic to it.

ram + state, so it can be recovered.

is proxying mcp by instruction the same as just proxying pure web ?
pure web is more diverse.

face_kind would be unique to each server ?
protocol, like mcp, web, tcp - that might be provided to ?

faces can boot from config ?

we can read our own metadata to determine our path, and then we can either ignore a request that came in, and log the error, or act as the root and do a fly replay.
A machines metadata would include its children.

we would check if the machine exists, and if so, we redirect to it.
Once received on the machine, the url params are unfurled.
New face with a face kind can start a new face and then may redirect to that view if it is a web one.

if the agent header was actually a remove mcp server, and it exposed resources like the faces, face kinds, face views, then everything else can just work with that ?

at the prompt you would see the path to the agent you're on, since this is what its machine name would be.

the header starts and it is actually an mcp server, a fly redirecter, and a https proxy.

the mcp server has commands start face ?
it probably has interaction commands for the face too ?


the header app runs by default, on a prearranged port that is known to the infrastructure.  This is the base of the agent design.
- fly replay if the incoming request isn't for this agent, or this app
- port proxy unroll if not for the default face - used for face viewing and face interactions
- reject if no default face

it also presents two mcp web servers, which are agent level interactions:
- faces
- interactions

faces cause redirects if they're coming in on web protocols.
so if you start an mcp face, we proxy to the port that thing runs on, whenever a request for the face comes in.
when a view for a face comes in, as proxy thru to the view, which might be the same as the face some times, in the default case.

working with faces and interactions is agent land table stakes.
after the face is started, it can do anything at all, so at that point all we do is port unrolling.

the agent client mcp servers, these are skilled at running locally, but they could 
if could prove machine id reliably, run as remotes servers.
So the fly infra controller could be a remove machine running the mcp server and keeping the fly token safe.  then the agents and computers mcp servers are not stdio but are web servers.
This could mean we can drop having a fly token inside each app.

use the meta to signal opening of a port, so a machine can read this to know the machine is genuinely there.

so we would have a trusted computer, and it would be the infra manager, and all the apps just point at that one to get things done on their infra.
Is better if it is just the one machine tho.
perhaps artifact could be that, and store the token ciphertext in the repo state ?
then it becomes a question of who can access the ciphertext, rather than who can access the env vars.