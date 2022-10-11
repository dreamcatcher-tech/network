A much simpler dev experience should be possible, since we are decoupled from where the code gets generated, and how it is transmitted.  We should be able to run a hosting service that has a trivial update flow.

Ideal flow
1. write code
2. test
3. run command to publish
4. all clients auto update

Publish a page, have ssl certs auto generate, dns names provisioned using chains, clients load it, connect to the hosted app chain.  They use this app chain for webrtc signalling and find each other, so they can share bandwidth and lower overall swarm latency.

Behind firewalls, the webrtc method means local servers can run and not need SSL certs provisioned, since they can be referenced by their peerId.