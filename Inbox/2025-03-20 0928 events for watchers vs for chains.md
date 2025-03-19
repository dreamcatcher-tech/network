
>[!tip] Created: [2025-03-20 Thu 09:28]

>[!question] Targets: 

>[!danger] Depends: 

So long as the execution model of artifact never stalls, and never errors, then the watching of events like 'latest commit' is lower in terms of correct functioning required.

If it faults, worst case, users refresh their browsers.

Having a strong guarantee on doing a watch on the repo from its home cluster would be ideal tho.
You read anything at all about the repo to figure out who the validators are.
Then you connect to their event streams, to be notified.
You get told what the latest thing is, and then from that point on, if your connection stays alive, you're guaranteed not to miss anything.  Reconnect is the same procedure as connect, with you being in charge of any catch up.

If a repo has multiple validators, then you can connect to them all, and get partial updates aka livestreaming, as well as decide what versions to accept yourself.

So this implies that each region runs a repo, for the sake of latency.

The clusters represent validators, and they can span the globe, or be local.

Clusters spanning multiple regions might be able to do burstier loads.