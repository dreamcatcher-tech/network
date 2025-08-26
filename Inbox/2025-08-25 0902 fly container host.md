
>[!tip] Created: [2025-08-25 Mon 09:02]

>[!question] Targets: 

>[!danger] Depends: 

if the container map was full managed externally, rather than an internal thing ?

if it was internal then we would need to manage it in a db somehow, so might as well control it from git, and periodically check we're still in sync, or have a reaper for old containers, and depend on creating a new container easily.

? call the machine api directly from the git app ?
we have to call the machines api anyway, might as well just call it from the git app ?
requesting a machine, we check if we have an allocation for it already ?

can store metrics so we know how long things roughly take.

we should drive the fly api using a worker, and then show the logs to the user, which would be fun to see it troubleshoot whats going on - so much better than a progress bar, and we can use the plan thing to have a plan that gets updated.

it might be that we never need to do anything other than call the fly.io infra mcp.
if someone wants to migrate to their own org, we can do that, and then the git app just points at their own fly infra, not ours.

fly can run mcp servers, so running the stdio mcp server might be the easiest, then we interpret its messages ?
Is this the long term best option ?
It is not good for autonomous agents.  unless we put an autonomy shim in front of it.

raw stdout stream is far more pure, as it involves the UI too.
we can then roll back the layers as we go.

using fly, we can even show the infrastructure geometry on a map.

artifact can make the mcp tooling provisioning be instant, so it doesn't need 
also makes the mcp calls repeatable.

artifact is the mcp host, then we need this agent host thing too.

check out a repo using a full pack file generated on the fly.
the final state gets pushed back to artifact and is stored on a fiber.  All the worker states a pooled and then periodically committed down.

So on artifact, the request to start a worker comes in, and it gets received by one of the Hosts workers.  this worker shares its state and its reasoning.  You are effectively talking to this worker, but with a hard locked interface where you can only say one thing "provision".  

you could start talking to just the hosts workers, who can answer any questions you have, and guide you into starting your own account.  You history is just stored in the browser until you make an account.

we could make a docker image that built the codex codebase, and then added some scripting shims over the top of it.
Then we make it callable from inside artifact ?

subagents just looks like an mcp call out to artifact.

the tile is:
1. a repo, a branch, a commit, and a path
2. a user message
3. the sysprompt
4. some config
5. tool prompt mapping

the state can be frozen at any point and resumed with
1. a new user message
2. any changes of the initial params

passing in multiple repos ?

modify the artifact mcp server to search and fetch agents.
instead of load, there is start.
but also need to search for currently running agents ?

should there always be an intro agent, and that one has access to all the children, so there isn't ever a top level means of searching, there is an agent for you, and all your chats are with children of this agent.

so we definitely need a registry of agents.

the container fleet interactions are:
1. search agent images
2. search agent snapshots
3. fetch agents
4. spawn agent
5. resume snapshot

the container header:
security ?
once auth'd, any request should get the full stdio file of the active task.  Late comers would get the full file and then they would get the latest version.  So write this to disk and then update as soon as anything changes on it.
post pushes something straight into the stdin.
tool calls used for this purpose.
resources list the web links for the stdout file, which is appended to.

should it be an mcp server, and the tool calls it takes are the same shape as the fly mcp server, but, 

pull down prior state by using git to check out.


something dirty:
webserver ssh's into the running agent, and tails the stdout file, then writes to the stdin pipe, if allowed.
or exec on the machine, whilst streaming down the result ?

no auth, artifact does the checking if it will do the fetch request of the remote server, and the tool call to retrieve the stdout stream, too.
Can list all the previous task stdout files, which can be pulled down as well.
Can pull without thinking if you want only output.

So artifact controls the access to the private execution network, and it only allows connections to be made that pass auth permissions on the repos.  If you can see the repos and have the 'x' permission, then you can make a request to pull the stdout file.

definitely be mcp to help expose other resources, like health, cpu load, config.

make the deployment by using git submodules, where the codex project is a submodule to a bigger wrapper project that builds the docker image for it, and puts the dev container for running in together.
then have the agent header be a little deno server.
test with a little program that exercises the stdout stdin thing.

so to artifact, the agent presents as an mcp call, with the special 

? how to handle queuing of messages ?
holding the queue message status seems hard ?
sending characters is just a tool call, and you can do that at any time.
