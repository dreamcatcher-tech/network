
>[!tip] Created: [2025-03-13 Thu 15:40]

>[!question] Targets: 

>[!danger] Depends: 

Billing for adding more quorum machines, so you can require it to be run by at least 3 different processors, and have a set number of region diversity, which can be measured in ping, or in location, so that you have resilience.

Everyone publishes the pings they see between other swarms, since we are all geographically clustered, and the network is structured this way, so we can specifically target network routes we like.

For example, if I chose a quorum of 10 signers, with 8/10 being final, then I can be quite sure that I have the very latest version, and I have not forked.

It might be that trying to present a global network of computers as though it was one computer is actually a folly. Then we should instead make each region in fly.io act as a standalone region. When you want to move your app around or contact a different one, you see the signatures on each commit are coming in as a totally different region. 

This way you could say that running a local version of our software vs running a version on fly.io is roughly the same. We should be the ones in charge of turning machines on/off and coordinating between them with messaging so that we basically operate a cluster. If you just give us Docker container resources and the controls to turn them on/off and scale them, we can do pretty much everything else from there. 