
>[!tip] Created: [2023-05-11 Thu 09:46]

>[!question] Targets: 

>[!danger] Depends: 

GPUs are in hot demand in cloud as AI applications need a lot of processing.  They are expensive to rent on the cloud and difficult to access as multiple levels of infrastructure are needed.  The gap between having your own GPU and using a fully configured service is large, making experimentation hard as trialing a new business requires significant commitment.  Even experimenting in a home lab can be restrictive if you need multiple GPUs.  

There appears no readily available solution to make GPUs liquidly available.

However one such application succeeded in pooling consumer GPUs as a commodity - cryptocurrency mining.  The demand for this mining has dropped significantly as of late, but the GPUs are all still there, and so an application that could pay people for this GPU capacity can be very popular.

Being able to source GPU as a commodity means you can run privately, or as required run in hybrid, and recover some of your capital cost by selling excess capacity.

The power used to solve GPU problems can be verified quicker than the power it takes to compute them.  The computations are also replayable, and deterministic, so running it several times and comparing the results can be highly reliable.  This reliability can be used to make assertions about other data, such as the balance of a ledger.

Make it run docker containers so we have an easy to distribute format which can be IPFS / charged for distribution of.  Containers can also be lazily loaded and then lazy snapshots taken, where nodes learn to distribute only the parts of the container that get used.

The container can have some storage on it too, which can be modelled as a shared storage on ipfs, so that running containers can have some context.  This is presented in the container as mounted storage.  Commits to the storage take a little longer because needs consensus.  Should be able to treat it like an NFS mount as the mechanics are still the same.

Hyperconvergeance is being able to interface with vast.ai directly from the chain, where the next decision is subject to consensus and was chosen by an LLM that was run in a distributed fashion.