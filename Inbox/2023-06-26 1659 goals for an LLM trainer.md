
>[!tip] Created: [2023-06-26 Mon 16:59]

>[!question] Targets: 

>[!danger] Depends: 

There are a set of requirements for how an LLM is generated that are restrictive over the current processes.

1. Be able to determine the utility of any subset of its training data.
2. Be able to induct small amounts of new data into the larger model, and to reach consensus that these embeddings are actually calculated correctly, as verified by multiple different stakers.
3. Be able to train an LLM and be able to check very quickly that it was actually trained as stated, since doing it several times seems a waste ?  Should run it at least 3 times to check the result, and hopefully have some way to cheaply verify that the result is as expected.  Can also require large stake to be held by the trainers over time, so that others can disprove them.  Verifying reduces the stake at risk by the prior trainers, and shares the rewards out with the new verifiers, so that over time as more trainers verify, they also share rewards, but fastest gets paid more and longer, with longer lockup / stake periods.  People can stake on a particular validator too, so they can gain on the process regardless.
4. Be able to train in batches but have those batches run in parallel