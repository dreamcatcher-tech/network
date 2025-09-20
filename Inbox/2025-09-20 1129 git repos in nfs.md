
>[!tip] Created: [2025-09-20 Sat 11:29]

>[!question] Targets: 

>[!danger] Depends: 


we could hard link the object store, since that shouldn't ever get pruned or cleaned in ways that cannot be shared ?
if we shared the git folder, then we have to manage the refs between them all.
We could dedupte the objects folder of each git repo into one big fat pool.

we could make the workspace repos use a remote object store feature in git, then we just store the names using namespaces like github.user.repo or something, so that we can keep just a single git object store around, and can rapidly spin up these new workspaces per agent without massive disk hammering.

so the requirement really is just workspaces that are bulletproof and instant to make new ones.

we could use git worktree, and the provisioning a new repo first makes a background master clone, and then uses worktree to make all the agent workspaces.

the computer is the thing that manages the authoritative git repos.  Agents then use worktree to gain access to it.

initially we will just have to use the full clone, since we don't have time to be fancy.
this is valid, since all else is an optimization.

worktree with a branch for each agent.

need a provisioning script when a new agent gets set up.
The agent that is booting, once it has aquired lock to act as the agent, it will do its own workspace provisioning, like clone down repos.

we could clone of a single base repo, that is kept in sync with the remote, and then each workspace just pushes and pulls to that one, or uses it as a clone. 
keeps things fast an local but also space efficient.

workspace spec can narrow the repos down to a path, or a specific branch, in which case we would use sparse checkout.

we could check out with no fetch depth, and then the bot has to know to get the history if it needs it.

may provide an mcp server to do management of backing repos.