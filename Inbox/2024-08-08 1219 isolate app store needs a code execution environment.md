
>[!tip] Created: [2024-08-08 Thu 12:18]

>[!question] Targets: 

>[!danger] Depends: 

Should be able to efficiently pull in packages and run them as isolates.

These little execution environments need to be highly dynamic, and very lightweight.

Like deno deploy, but they don't permit dynamic imports.

So probably needs to run on lambda or something similar.

At least in the beginning, we can just include this code in our repo, and rely on deno to isolate us from harm ?