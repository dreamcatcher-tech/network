
>[!tip] Created: [2025-08-25 Mon 13:00]

>[!question] Targets: 

>[!danger] Depends: 

use unionfs to allow multiple sessions on the same repo to run.

If they start from the same commit, then we should maybe error ?

means we can reuse the same docker image for different session if the git repo is the same.

so the docker image, for any given repo, is the agent base, and then multiple sessions can run on the same container, to reuse disk, since with a unionfs layer, the runners can be isolated from each other, particularly if they are all on the same security domain.