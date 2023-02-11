
>[!tip] Created: [2023-01-11 Wed 15:26]

>[!question] Targets: 

>[!danger] Depends: 

If the Engine was in a service worker, then we could reuse the same instance between storybook tests.  Avoids having to parse all the CAR file into ram each component.

Plus any decoding from any other engine is shared.

The service worker would be the remote resolver, which can make pulses available to all with very little latency.  Can store all data as a loki database for speed.  Or an ipfs repo.

Can cache remote chains so that tests are quick to reload.

Can merge multiple URL fetches into the same database.