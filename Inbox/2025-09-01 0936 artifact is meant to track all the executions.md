
>[!tip] Created: [2025-09-01 Mon 09:36]

>[!question] Targets: 

>[!danger] Depends: 

each app is supposed to have its own home repo, and in there is where all the executions are happening.  The git repos are just hash based connections and don't strictly matter.

In the top level app, this has the special power that it can create new apps.

Artifact is separate to all, as it is just a permissioned data store, but it can also trigger agents to execute - it is the agent orchestrator.

Agents can be persisted into artifact when they are halted.

So in each users home repo, this is where all the currently configured agents are laid out.
There can be multiple base apps / default apps, which can give resiliency and load bearing.
How the router chooses these can be configured too.

When a request comes in, first we look at artifact to see what is available.  then we go to contact the correct machine, based on config.
Errors or missing machines are handled under the hood, with users attention being focused on the agent doing the work at all times.

Artifact is never actually doing stuff, it just stores and coordinates, and is always on.
Message passing between agents should be handled via artifact, for consistency and crash recovery.
Execution in artifact is handled by the process that introduced the change ?
We could trigger things to kick off, but they would be generic, and would start an agent, that would do the processing.
If in consensus, requires two or more lockstep agents to allow the state change. 

One face router for the whole cluster of applications.
This would be its own special app, and it interacts with artifact.
It possibly is artifact, or is at least an artifact node.

The agent router simply points you at different agents, based on the artifact config.
Fly replay drops you in to different levels of the app until you arrive at your exact agent you want.
The apps default agents will work to spin up  the required agents if they have been hydrated.
If no default agents, the home app will set that up for you.

Distinguish which agent you got exactly ? 
have an optional agent=0,1,2 header in case that ever matters ?
Without specifying just says let the system figure that out for you.

Even viewing artifact is done thru viewing and agent face, which is pointed at artifact.
Artifact is primarily a data structure, not a view.  Agents do views.

If there is no base agenta t the ready, then provisioning has died - artifact cannot work without these base agents, since they EXECUTE on all the signals that artifact presents.

So artifact is an inert store, that produces logical results to things, and then agents are expected to be on hand to respond to these things.

the base agent would subscribe to artifact, and when it got notified of a change, it would do something ?  or artifact would make the mcp call into that agent ?

