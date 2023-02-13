
>[!tip] Created: [2023-02-13 Mon 14:18]

>[!question] Targets: 

>[!danger] Depends: 


Relying on the engine to announce everything is bad.  It clocks the ann

Should use the endurance cache of what latest is.


## Recovery
After reboot, remove subscriptions might be done by chainId alone.  These cannot be recovered without some kind of preload.  Hence whatever is shared over the network should be stored somewhere.  These shares could be a hardlink to the live running chain.

As a hack, we could manually rewalk shared chains on reboot by doing `engine.latest('/app')` or whatever the shared path is.  This requires the latests cache for announce be 

Endurance therefore should offer subscriptions to changes, which can optionally be filtered by subscribers to ask for specific chains only.

If the shared chains were listed somewhere like mtab, then we could subscribe to their paths directly.

## Introductions
When first a client connections, it should be given a list of options for paths that it can connect to.  This allows an app to connect automatically knowing only the address of the server.  This is a sloppy and insecure way to operate, but increases convenience a little.

Once a centralized DNS style chain is available, publications can be made to this, and connections can begin from there.  So all we need is a path, which we may have found by browsing.

Ideally we should hardcode the server into the client, and just try it to see if the chainId we want is available.