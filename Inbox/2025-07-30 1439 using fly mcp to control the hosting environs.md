
>[!tip] Created: [2025-07-30 Wed 14:39]

>[!question] Targets: 

>[!danger] Depends: 

read stats, make decisions, theorize.

but then, we should be able to convert any cli into an mcp interface.

we might be able to use their api, but we should define it as a napp.

then we should be able to constrain it / limit / restrict it.

fly has an openapi spec that we could use to generate napp interfaces.

can power up and scale machines, using business rules.

provide it a mock or a simulator so that we can exercise how it will operate on the real thing.

can do wait for state on machines, so it can go to sleep or something.

whenever we want to do any kind of hosting or coding experiements, it would first try what it did in the simulator, check the invariant rules (must not cost more than x, must be deletable) and then have something safe like a lease or something, that is only good for x minutes, and you say why.

Then we can use the llms to play around and test things, find answers to questsion, by doing things on the env itself.