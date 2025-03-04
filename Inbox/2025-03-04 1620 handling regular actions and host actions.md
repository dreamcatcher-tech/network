
>[!tip] Created: [2025-03-04 Tue 16:20]

>[!question] Targets: 

>[!danger] Depends: 

Seems that `@artifact/provider/*` actions are all needed to be intercepted by the host.

So the target scope needs to be a special host identify, since you are trying to talk to the infrastructure.

When a web browser is acting as a client, it is sending the host actions in directly. When an app is executing within the environment, those host-level actions would be sent to the app itself, an interpreter would be then intercepted. 


A napp only ever communicates with the host, but some of those actions might be transmission actions.  So we need a virtual scope for this.  The did would be the requester, the actor would be an actor controlled by that did, the repo would be a special host repo, which would be anything but needs a reserved pubkey.  The branch would be a standard name.  The fiber would be some standard name too.

Basic ops to demonstrate:
1. action request reply
2. action with streaming reply
3. action with multiple file reply as well as regular reply