
>[!tip] Created: [2025-09-08 Mon 23:43]

>[!question] Targets: 

>[!danger] Depends: 

we should only offer this as the only way we provide service, since it requires no trust of us.

we could probably optimize the containers and the software to be super performance as confidential containers.

we would then run a public blockchain using these attestation proofs.

it means that we can use bare metal hosted services without having to run these things ourselves, and they all still work.

so we'd launch on fly to get the experience right and validate utility, then when we move to get off fly, we would move straight to confidential containers.  If we don't, then we need to have trust in the hosters.  We would only be computing on price if we use our own untrusted hardware, but with confidential we have a point of difference, and can move towards public chain.

if we had coco, then we might not need registration, really, since we need no permissions ?
like you could just join, and then start running, much like bitcoin mining ?  no real setup, come and go as your please ?

if we are going to trust the cpu attestation anyway, then does it matter about anything else? anyone can join, instantly, and start earning once load flows to them.

being confidential also guarantees integrity, so even if no secret, then we can also know they ran with integrity.

the boot kit can auto connect to the chain and can be controlled by ai agents from that point on, including troubleshooting and provisioning.

we'd want to make sure we had paths for upgrading the way we do containers, like keeping an eye on firecracker advancements.

because they're confidential, we can boot them, and then have them on warm standby, and they are still confidential - they can then provision themselves with the next layer or the files required for a specific job.

or can charge extra to keep the next container on standby.

so the tuning of the hardware can be ai managed, as we do large scale experiments to tweak the hosts better and better.  The chain wants them to be more efficient, because that is margin, so you can trust that the tuner has your interests at heart.
So all the dials and knobs, and all the hardware differences, can all be sampled and tuned for, as experiments are run.

so its basically a blockchain kubernetes thing.

for public containers, we could run the container as confidential, then run each container in non confidential mode relative to each other, then use the proof of the whole vm as proof of each one.

we could then raise to load up the hardware and software to do this computing in a confidential way.  and make a currency out of it, and tax the running of it to run the overhead of opteration, like maintaining the ledger. as well as running the AI required to manage the operations.

Confidential computing extends the practice of securing data in transit and data at rest by adding the practice of securing data in use.

that we ever thought we could do dark edge without confidential computing seems insane, actually.

we would also want to have LLMs continually modelling the trusted execution path, so they keep pace with changes, and any designs we submit, it can reason thru them and gauge them against threat models.  It also keeps track of changes, and live vulnerabilities, so its always figuring out the best arrangement.  

so the highest bar is trusted infrastructure with confidential computing running inside.

the tls that gets presented to the browser can be anchored in TEE, so even the browser can take that cert and verify it.  We can make a small browser extension that lights green when your page is being served by a trusted confidential vm.

a HUGE problem with public blockchains, is all the data is public.  plus if you try to do bespoke useful computations as your workload, then the operators can see it.  coco removes trust in the operator, so we can indeed make a system of general compute that is confidential but is trustless for the operators, so they don't even need to score reputation.

we also have strong host affinity, so we can attribute the calculation to an exact cpu, meaning they can't be switched out by an attacker.

operators would give the whole host over to the pool, so it controls the entire piece of hardware.