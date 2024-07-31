
>[!tip] Created: [2024-07-31 Wed 06:18]

>[!question] Targets: 

>[!danger] Depends: 

Needs some way of saying what bots a given switchboard can have access to ?
By default, should be all the agents in the directory ?

Needs to be injected with the summaries of all each time it runs, so needs to hook in to the indexing function of the system.

Generate an index format so we can commit it to git, and update manually for now.

Also summoner should have a bit more context.

Switchboard should try to stay in the same thread.

Add some yaml config to the agents so they have some switchboard config.
Then we can populate those agents with the generated summaries.
The summaries would be updated every time the bots changed on disk.
Summary needs to be generated using the isolate commands too, since these are part of the prompt.