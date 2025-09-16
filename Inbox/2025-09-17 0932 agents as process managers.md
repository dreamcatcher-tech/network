
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