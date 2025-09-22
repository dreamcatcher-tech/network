
>[!tip] Created: [2025-09-23 Tue 09:42]

>[!question] Targets: 

>[!danger] Depends: 

all the hardware that connects to the pool needs to be registered somewhere.
our primary data structure is a repo, since we believe we can do any data structure in there.

key seems to be having already running cocos that make decisions about who else to add to the pool.

so the hardware will connect up to an already running coco to be provisioned.

then the hardware will register itself with a coco service, that accepts tcp connections, or web connections in, and it makes itself available for work.

When it receives jobs, it needs to go around fetching the pieces required, like docker images, build up the coco, then report back that the coco is ready.

All these registrations and jobs are stored in repos, which are used to track the state of a given machine.

It could be one repo per machine, or one branch per machine - just something to take the central load off.

The web responses are stored by cocos talking to the hardware host.

> the level jump is that the cocos can talk to the host over tcp

This means that the confidential environment can control the unconfidential hosts, and coerce them into supplying confidential containers.
Latency and reliability / availability is also stored in these repos.

? does this mean that the transactions, where the money changes hands, is also stored in a repo ?

micro transactions using a netting process, where the activity is logged where it is given some limit, then when all those mini tx sum up enough, we do a big one, which is stored longer and processed by more reliable sources.