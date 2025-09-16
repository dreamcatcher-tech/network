
>[!tip] Created: [2025-09-17 Wed 09:32]

>[!question] Targets: 

>[!danger] Depends: 

a process management web interface for the agent is probably better as the base face of the agent.

so the header of the agent becomes more like a process manager, handling crashes and resource management

ideally a little ai agent would run in the background to manage and balance these things, rather than us writing code.

particularly if the reaction time doesn't need to be that quick, and it can do things like update the available capacity, check on the state of the disk and other metrics, and then take some action or set some warnings.

so an agent is defined by the docker file, and by ultimately running the face process manager, which  gives it standard access to resources, like how to start new computers, new agents, new faces, and how to handle git resource provisioning, authentication, proxying.

the image stays kind of agnostic, since when it runs things, it runs them as linux processes, so any  language suits.

the dockerfile is responsible for the tools in the environment, installed from the likes of apt package managers.

if we made the process manager be controllable by mcp, then we can enable agentic management of the system.

if we use a lib, like pup, that has well typed config and state objects, then we can sync these up somewhere and provide a combined view.  Even if that view is json only, it can still be managed by an agent.

this can give the agent some debugging tools to track down problems, like ability to restart processes, kill unresponsive agents.

these tools would likely be provided to a bot that specialized in agent management.

we can mock http responses out to other servers too.

we need a language where we can abstract away the tcp part of things, so we can run in simulated world for tests, and know we have good fidelity to the slow and expensive processes running in agent land.
So the top level bus would handle a very simple interface for arranging agents and calling faces.
? maybe that could be mango language, so agents could use it to simulate what they want so they can get the config right, and then they deploy it and want it go ?
if they want to change things, they should run the simulator first.

if we could wrap the mitm proxy using process management, then we might be able to train an agent to help us debug some of these things, since they could set up the proxy, capture the data, read it, make the changes, and keep going until they had a working tool.