
>[!tip] Created: [2025-08-26 Tue 13:19]

>[!question] Targets: 

>[!danger] Depends: 

mcp servers are like web servers - many light requests, state in db.
agents are heavy, long, and independent - they have their own vm.

this handles repeatabiliyt, auth, and is very light and fast.

the docker containers have enough to do, providing a workspace, so they don't need to run an mcp server as well.

so fly mcp server would run as an artifact mcp, wrapping the server since it is an external service.

provides an external replayable mcp log.

can help with virutalizing mcp servers to help with testing and evals.

it would manage secrets, and clean running.
can handle tool prompt overrides.
can handle assembing multiple toolsets together.
can exclude some tools.

can take a stdio server and wrap it as an artifact server, ensuring it executes in clean isolation.