
>[!tip] Created: [2024-06-20 Thu 15:32]

>[!question] Targets: 

>[!danger] Depends: 

In particular, synthetic evals.

So have some example scenarios we want to run, and if they all pass, then a new version of the image is published.
Pipeline entry point looks at any time the source files change in any way.
Pass would result in a new image being published as `latest`

The image is referenced like a git submodule, but when executing, it doesn't include all the files inside the current submodule, and the system uses this as how to execute the agent.

So then, the repo can optionally fetch all the submodules at the given path, if required to.