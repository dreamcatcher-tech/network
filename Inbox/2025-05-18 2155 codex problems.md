
>[!tip] Created: [2025-05-18 Sun 21:55]

>[!question] Targets: 

>[!danger] Depends: 

We need some way to isolate files so that we don't end up having long-running tasks that collide and have merge conflicts. We sort of need to separate the work out into islands so that we can have locks on areas. 

Again, we have a weird, narrow opportunity where the ability of my VSCode to keep up with a high number of pull requests going on and the wish to have some agents kick off in response to that. If we were running on Artifact, we could be getting hooked whenever GitHub gets pushed to, and we could trigger off arbitrary flows from that. 