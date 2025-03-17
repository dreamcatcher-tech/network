
>[!tip] Created: [2025-03-17 Mon 14:45]

>[!question] Targets: 

>[!danger] Depends: 

in each region, we would set up a dedicated app that represented a NATS service and could fire up a collection of workers to do different jobs. 

The workers could be on a totally separate app that simply provided reliable request/reply and streaming for running napps of any kind. 

Then in the client side of the application, its purpose is simply to manage things like browser connections, logins, that kind of thing, with the model being that the browser gets this docker image representation so that the browser's reliability becomes a service side reliability and the browser is effectively conducting its business as one of these server-side containers, which excuses us from a lot of the mechanics that the browser limits us with. 

Then this could probably give us guaranteed subscriptions where we would ask the client machine to subscribe to the Shockwave app, which would be in charge of producing new commits. Once we have done a flush on that, we can be assured that we will get the latest updates of the app. 