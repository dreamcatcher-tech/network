
>[!tip] Created: [2025-09-11 Thu 14:31]

>[!question] Targets: 

>[!danger] Depends: 

we would run the command on the cli, and the tmux view is some kind of default view.

agents are the url path.
faces are the url parameters.
mcp is like a system level face.
agent may always provide a bash face, or an htop face, so it can be monitored.

url params required:
- mcp - used by agents to mcp in and do things
- newFaceKind=faceKind used to make a new face, assuming this is allowed
- newFaceConfig=...args used to pass custom config options to the face start
- view=faceView which view of the face you want to connect with, or the default one if not specified

a view with no face is asking to start a new default face and look at that view.

views can be accessed by number or by name.

face status view is just the json value of its status, piped out to the web.
mcp must be specified alone.

agent may have a default face, or a system face, which is used to show the status of the agent and all its running faces.  Views could be auto refreshing, or just snapshot view.

every face should indeed run in a tmux wrapper, and there should always be a default view that points to that session in a readonly way.

basically we'd be wrapping any command we want to run in this tmux wrapper, then making a default view, and that way you can always see the process logs at a glance.

? should there be a views list face ? 
or a bash face that is available for every agent ?

so the tmux script would get tested for its error handling and reporting, and that it started the ttyd server on the default view.