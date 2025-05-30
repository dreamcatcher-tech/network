
>[!tip] Created: [2025-05-18 Sun 21:55]

>[!question] Targets: 

>[!danger] Depends: 

We need some way to isolate files so that we don't end up having long-running tasks that collide and have merge conflicts. We sort of need to separate the work out into islands so that we can have locks on areas. 

Again, we have a weird, narrow opportunity where the ability of my VSCode to keep up with a high number of pull requests going on and the wish to have some agents kick off in response to that. If we were running on Artifact, we could be getting hooked whenever GitHub gets pushed to, and we could trigger off arbitrary flows from that. 

it isn't able to track my intent over a range of conversations, to discern rules for a specific repo, or be able to hoist these up to be rules for in general.

The best way seems to be having multiple concurrent tasks in isolated areas of the codebase or isolated repos. You can then dance around each one, nudging it forward a little bit at a time, possibly queuing up tasks that are going to be done on that repo once the prior one has finished.

Ideally, we would have a system that could handle this queuing automatically and also curate the queue to see if a prior finished task didn't already solve the queue, so it checks if the task is still relevant. But since we don't have that, this is an intermediary step. 

This is the way to get maximum throughput from the system because the human is able to be engaged all the time and Codex can take its time to complete the specific tasks, and there's no merge conflicts. 

Sometimes we can avoid merge conflicts by simply using the exact same prompt and starting again, perhaps with slightly more guidance and using a newer version of the code. This is often easier than trying to merge in the latest branch, which seems a little difficult in Codex at the moment. 