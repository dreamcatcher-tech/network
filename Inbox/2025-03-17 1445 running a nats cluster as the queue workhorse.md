
>[!tip] Created: [2025-03-17 Mon 14:45]

>[!question] Targets: 

>[!danger] Depends: 

in each region, we would set up a dedicated app that represented a NATS service and could fire up a collection of workers to do different jobs. 

The workers could be on a totally separate app that simply provided reliable request/reply and streaming for running napps of any kind. 

Then in the client side of the application, its purpose is simply to manage things like browser connections, logins, that kind of thing, with the model being that the browser gets this docker image representation so that the browser's reliability becomes a service side reliability and the browser is effectively conducting its business as one of these server-side containers, which excuses us from a lot of the mechanics that the browser limits us with. 

Then this could probably give us guaranteed subscriptions where we would ask the client machine to subscribe to the Shockwave app, which would be in charge of producing new commits. Once we have done a flush on that, we can be assured that we will get the latest updates of the app. 

The jetstream queue acts as the work dispatcher, but can also be used for subscriptions of changes to different repos, to get the events stream out.  These work queues should be tied to a specific region, which is the repos home region.

We would make an intelligent choice when to move a repo to another region, based on where the writes are coming in from.  This keeps the cluster messaging fast, since no global consensus is required.

We could store the messaging on the ephemeral storage of the nodes, since if the nodes aren't running, we don't care about the messages.

Or, for watch notifications, we could use the tigris callbacks ? return a message whenever a repo changed, then figure out from that if the subscription has changed.

To get going early, just run a simple jetstream cluster, which provides the syncing of the work queue, and the notifications to the clients.