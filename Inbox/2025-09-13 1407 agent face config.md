
>[!tip] Created: [2025-09-13 Sat 14:07]

>[!question] Targets: 

>[!danger] Depends: 

for each agent, there is an auth handler, that takes in all traffic.

there is only one port listening on each machine, that is 8080.

we need some setup scripts that do things like pull from github.

boot the tmux session that loads the header processor, 
on the root of the agent, show the default face.
config says if you make a new one on landing or not.

if its tmux faces, we can set path options for them, so each one sits at a dedicated path and knows about it too.
this is special to ttyd sessions, which is very general, so makes it easy to run cli apps and just have distinct paths for them.

when you land on the agent home page, you would get the default face with the default view.
you might get a new face created if it was configured to be that way.

this could be triggered by sending a call into the mcp server that manages faces ?

default face could be just, any old thing, like even a simple webpage ?
so the app that fires up could be different, or selected from different faces, and then that just gets presented as the base view ?

is the default face just the first face that was started ?

for an auto created face, does it get removed when someone leaves ?
could we store some state in the users browser ?
if they go away, the face would go away ? so if they close the page, then the face disappears too ?
what if the tab went to sleep ?