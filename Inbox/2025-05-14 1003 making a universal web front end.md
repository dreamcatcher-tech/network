
>[!tip] Created: [2025-05-14 Wed 10:03]

>[!question] Targets: 

>[!danger] Depends: 

When an application needs to receive webhooks, we need a way to set up some kind of a listing service that can receive any kind of data and then we'll link that to some kind of chain action. 

This same service could be used to put translators or helpers in front of blockchain operations. For example, the Vercel SDK works best with a dedicated endpoint. This endpoint could be the API gateway, and it could do operations with end results coming back in. 

It could do compute, which would we build for as a side effect. 

Any URL can be set up to do this. It basically translates from regular web inputs into blockchain inputs and can also give them back out. It can also handle authentication. 

The config is on chain, and any request comes in and looks up the chain to see what it should do.

It effectively can give each repo a dns address, and each branch too if needed.
Can be used to serve files, or static websites, straight from the repos.

napps should be:
1. napps, which are called by direct actions
2. services, which are long running napps ?
3. triggers, which invoke a specific napp, and can include cron jobs or api gateways