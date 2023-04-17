
>[!tip] Created: [2023-01-23 Mon 12:02]

>[!question] Targets: 

>[!danger] Depends: 

Using the [[React hooks for Side Effects|Hooked side effects]] pattern, we can run the heavy repo as a side effect in a chain.

Its configuration and status is handled by the side effects and by reconciling state with actual, just as react mutates the dom.

Then it uses its context to bridge into the running engine, and inject its available context into the running ram based repo.  Once it has inserted into the ram repo, it can then drain it to remove memory pressure and answer its requests for deeper hash resolutions.

This means that requests for data are never passed along it as actions, but rather only its control plane is managed in chain land.  Its deployment would have been done by chainland covenant too, assuring its contents.

It might be possible to make a heavy repo that was actually using a channel to send its requests in and out of, so long as the payload layer was always hash based, and so long as the resolver was a function that supplied blocks directly by CID.  Logging all pulse requests might be useful for tracing network activity.  The repo would need to purge periodically to avoid filling up from its own activity.  

Generally, making all repo requests be a chain is bad, but the control plane is easily chainable.