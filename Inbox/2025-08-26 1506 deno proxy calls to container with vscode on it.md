
>[!tip] Created: [2025-08-26 Tue 15:06]

>[!question] Targets: 

>[!danger] Depends: 

if the auth allows, and the auth hasn't changed, then we can let a large number of connections come in and view the vscode instance that is running on the agent.

we can sit it within its own filesystem layer, so that multiple edits can occur without hitting each other.

or, we can make it all edit the live mutable filesystem.

if you wanted your own version, you should start a new image and connect to that.

use fly proxy to hit the exact machine, and connect to its remote mcp server being hosted.

the machines may need to be hardened, since fly lets all machines in the same org see all others ?

agent container uses jwt and it is provisioned with artifacts public key, so artifact signs its forwarded web requests.

we would flycast with the machineid.
or maybe, the machine need not be created at all - we just make sure that there is 

what if we had an app, where this app provisions machines as needed, and does the management ?
otherwise starting a new agent is a bit of a burden ?
1. create a new machine (but why can't we just have some on standby ?)
2. send in the config for that machine, and the user prompt

but we would always be chatting with something anyway, so it could make a call to the ai that handles this, and the timing might not be too bad ?  Or we could talk to that agent ahead of time and ask for some apps to be put up in the pool, since we're going to kick them off quickly.

so if there isn't a machine with the repo checked out, then we ask for it, but if we do, then we can start new sessions on  it, since it can handle many sessions concurrently.

make the 