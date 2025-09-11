
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


face status view is just the json value of its status, piped out to the web.
mcp must be specified alone.

agent may have a default face, or a system face, which is used to show the status of the agent and all its running faces.  Views could be auto refreshing, or just snapshot view.