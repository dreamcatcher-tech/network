
>[!tip] Created: [2025-09-25 Thu 08:49]

>[!question] Targets: 

>[!danger] Depends: 

if the computer app was able to replay back to the machines app ?

so why have the computer app at all ?

If the machines were always in a pool, it is significantly cheaper.  and faster response times.

so the computer app would flycast back to the machine pool.

pool would then replay with force instance id on a particular machine.

? what does the computer do at that point, other than store secrets ?
It could do actual monitoring of the correllation between machines and actors ?

if we make this app have an api that the actor apps call out to, then we can update how the machines reconcile in a much better way.

if we just watched the nfs as wrote to that, and THAT was our message passing, then we can build around that as the api easily.

reconciling the hardware becomes separated then.

so why even have actor apps ? these could just be emulated ?

ultimately, since the rule is that you only ever talk to agents, then all we need is a machineId to force replay to ?

the nfs can store a separate slice, which is administration.
When the agent images boot, they log what their latest image is in the nfs server.

idle machines are always being shutdown, so we do upgrades as soon as the machine goes idle.  or we notify it that we need to upgrade it, so it can pick a point to crash at.

the machine runner can use nfs to store its accounting data too, so it uses a git repo to track the state of all the machines it has.  it takes out leases and it recovers failed leases.

does this help emulated testing ?

so really, permissions management is nfs based, and network hardening is the machine image responsibility.
this seems closer to coco, where coco releases keys that grant access to the nfs slice.

communicating thru the nfs server seems safe and we could lock that down maybe ?

if we use message passing on the nfs filesystem, this is an ultimately stable and implementation agnostic api, which is a better way to interact with things.



so the agent machine is the ultimate thing that services everything, and all we really do is route traffic around, to hit them.
they are ultimately represented by the state stored on the nfs server, and we also marshall around machine images to run these agents.

So if we make one app that deals with machine handling, and it reconciles the nfs store with the hardware, then another app handles auth and replay.  They could be the same app since they are light.

we could also use some agents to manage this list ?