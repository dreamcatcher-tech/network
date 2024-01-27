
>[!tip] Created: [2024-01-24 Wed 15:31]

>[!question] Targets: 

>[!danger] Depends: 

If the code for this was in deno, then it wouldn't do npm install.
It would fire up nearly instantly, and be able to process the incoming git PR.
If it was linearized so first in first served is how the requests were processed, then we can keep a consistent view of the repo.

Or, we could use deno deploy to give rapid usable results, and then run github actions in isolated mode as a way of having absolute surety of the correctness of our operations.