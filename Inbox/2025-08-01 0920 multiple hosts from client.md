
>[!tip] Created: [2025-08-01 Fri 09:20]

>[!question] Targets: 

>[!danger] Depends: 

the client needs to connect directly to each of the servers, by fly doesn't naturally like this.

these servers should be treated like fly apps.

they might be actually independent, with one app per machine ? or at least per isoalted region.
so one app per region of operation, and then use fly replay to find the exact machine in the region that you are being served by.

So in this way, our redudancy internally is the same as if you crossed providers, the only difference being that they all show up under one bill.  We should bill each region differently, so that extra providers just show up as new items, and then you can configure what regions you want to be in, and at what pricing.

intro message to invite a host to take part in a repo, where we show the signature welcoming them in, and then do a handshake that way.