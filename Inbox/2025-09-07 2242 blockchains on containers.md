
>[!tip] Created: [2025-09-07 Sun 22:42]

>[!question] Targets: 

>[!danger] Depends: 

they don't need to run confidential to be a public blockchain.

firecracker can run public workloads super cheap.

then docker for more confidential runs.

a lot of our workload is not FaaS type things, or at least, even the bits that are, the containers can be reused easily, since they run many functions, as they are grouped by trust, not by code alone.

one usecase is having confidential containers where other parties code runs on other parties servers.  Altho being able to provide highly secure hosting services seems better.

provides perfect deniability for the hosters, too, since we genuinely cannot see inside.
so it protects us, but also allows us to offer quite strong data breach guarantees.

All the ills of what exactly are you running on our systems becomes not our problem, since we have no way to tell.