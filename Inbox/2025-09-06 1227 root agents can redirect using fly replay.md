
>[!tip] Created: [2025-09-06 Sat 12:27]

>[!question] Targets: 

>[!danger] Depends: 

rather than doing the redirect internally, and choking the root agents, we can do a fly reply which will connect directly to the agent.

Once in the agent, that is where we do the proxy to open up whatever port is required in the params.

different faces have different ports from the port mapping.

so the fly replay gives us multi agent scoping very easily.

even face redirection can be done to just point it at the port in question, rather that try to actually run a proxy.

since we are at the setup face, just redirecting until we find the ultimate target seems fine.

redirects that hit multiple machine names can do a quick lookup to find all the suitable instances and then just pick one at random, possibly by being the lightest loaded ?
if a machine is too loaded it can redirect further.

