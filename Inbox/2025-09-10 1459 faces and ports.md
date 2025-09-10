
>[!tip] Created: [2025-09-10 Wed 14:59]

>[!question] Targets: 

>[!danger] Depends: 

what about making a face that was the npx mcp inspector ?

this face would basically take no interactions, or would error if it was interacted with.
this means the properties of the face should be advertised, and some can be non interactive.

the port is the view.
the view status is:
- port number
- protocol

basically the view would use the libp2p multiformats way of describing things.

so a view number, the face is looked up, and the view is mapped to a port or some other things, and then the proxy goes thru to that.  Views are set by the face, and can be named, or they just get numbers ?


the inspector face could be just available to all, and you can reach it by asking for a new face of this kind.

new face should be reachable by url parameters, so I can specify the face kind that I want, and then I get redirected to it.

so we need to change the header, being the thing that gets hit by the browser first.