
>[!tip] Created: [2023-01-16 Mon 09:48]

>[!question] Targets: 

>[!danger] Depends: 

In applications that are backup aware such as databases and virtual machine hosts, a function call can be issued to queisce the filesystem so a consistent backup can be taken.

Once we implement [[Tension]] in the Complex, then a forked complex can be quiesced by issuing the `@@QUEISCE` command at the top.  This will fork the root chain, and begin the process of executing all the queued up actions within the tree, and their consequences.

`@@QUEISCE` ensures there is no more tension left in the fork, or it ran out of execution credits.

## Transmits
If the requests, replies, and promises are for other targets within the fork, they will be executed.  The cycle will continue until there is no more tension in the fork, or until the allowed credits have been used up.

If the destination is foreign, then all outstanding requests will error, all replies will be discarded, and all promises being resolved will be discarded.  Promises in flight will be forcibly canceled.  If this was not the desired action then a replacement target should have been forcibly inserted before the `@@QUIESCE` command was issued.

## Receives
If the requests, replies, and promises are being received from a foreign chain, they will be processed as normal, but the replies sent out will be discarded.  If a promise was received, the promise will be forcibly rejected and sent back in to the reducer.

If this was not intended, then a replacement target should be spliced in before `@@QUIESCE`.

We can allow for splices to be made where a foreign chain destination is forcibly replaced with some other foreign destination, in order to mock or redeploy the fork.

## Active Quiescence
The approot may be put into a mode where it will not accept any external stimulus, and will only process what is within the app complex.  This can be useful to produce a master copy type of backup, where no tension exists in the system.  This is a change to the way the engine operates, rather than any particular state change in the complex.  The engine starts to buffer external stimulus until quiescence is achieved.

This may also be achieved by creating a fork, then quescing it, then taking another fork. 