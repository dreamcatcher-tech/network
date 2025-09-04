
>[!tip] Created: [2025-09-04 Thu 13:25]

>[!question] Targets: 

>[!danger] Depends: 

if a process can be restarted from some point then it can be run nomadic.  in git consensus this is happening rapidly.

The containers can be connected over wireguard tunnels with each other, so the comms are super secure and low latency, which means the machines can be anywhere.

if the latency is too high, then other instances are started.  indeed they are often running in parallel.

at worst, this would merely slow consensus down.  But this portability, where these nomadic microvms can find each other and communicate securely is what makes them a single computer.

It's like a dark edge version of fly.io.  Slap any old hardware in the pool, and make the host follow certain scheduling rules.

The hosts themselves are controlled by a blockchain.

consensus is the agreement of state, but resilient compute is about reliably moving to the next state, even tho the intermediate processes may be unreliable.

So where the whole system is run on firecracker microvms, consensus is reached on the git commit that represents the computer state, and the vms are started from that checkpoint, which presents like a different dimension.  the multi path attempt to get to the next state, where starting again is the recovery mechanism.

our specialty becomes how light weight we can make the git piece to make working with these repos ultra efficient.

if the vm can continue from its last snapshot and the return point loss is considered normal, then it can be restarted anywhere, multiple versions can be run, and there is no host stickiness, as it could be on a different host every time.

if its operation is deterministic then it can be rerun in multiple places.

this microvm run is the unit of resilience - it is what should be sold.  It can run any process, but so long as it is repeatable, we can achieve mechanical resilience.

Even if it is not repeatable, we can use llms to reach consensus nonetheless where the differences are agreed upon by intelligences, releasing the high pressure stakes of pure repeatability.

repeatability with diverse operating environments is even harder still, and so llms can help soften these requirements and still reach working consensus.

so a computer is a single repo that is used for managing the compute state.  It has repos attached to it as its filesystem, but that is all.  It could control other computer blockchains.

It runs a single branch, since it runs the git folder inside of git objects.  it is the non multiverse thing, since compute is real, and paying for it is real.

branches of this repo are purely for data.  Maybe they shouldn't be used at all.

live migration doesn't matter if you just restart from checkpoint.