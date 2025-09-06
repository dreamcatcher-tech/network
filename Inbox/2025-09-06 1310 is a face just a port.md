
>[!tip] Created: [2025-09-06 Sat 13:10]

>[!question] Targets: 

>[!danger] Depends: 

no, a face is something you interact with in agent land.

a port is just a regular old net port, but a face should register what ports it is allowing, so that when you come in on a face, you can also request a port ?

faces would be using ports for views.
a view id is a mapping to a specific port.l

so hitting a face id will redirect you to a port, if it is a web face, but it might be a stdio face, too.

faces then hold a mapping of ports to faces for web face redirects, so when a face request comes in.

a web face would receive interactions as post ?

if a web mcp server was acting as a face, this would just get proxied thru.

face proxies you thru to a port.
view proxies you thru to a port, but you have to specify face to be allowed thru.

ranges of ports we can deal with another day perhaps ?

allow the debug param 'port' and we'll just redirect to any port we like.

a face is intended to interacted with by other agents.  a port is classical app interactions.