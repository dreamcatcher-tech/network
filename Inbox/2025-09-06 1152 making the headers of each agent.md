
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