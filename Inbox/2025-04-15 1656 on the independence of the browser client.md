
>[!tip] Created: [2025-04-15 Tue 16:56]

>[!question] Targets: 

>[!danger] Depends: 

It might be that having the browser be totally reliant on the server is the correct design choice.

This means that even for partial search results or results that come in as you type, we would be sending to the server to do this processing. 

Previously, a design goal had been to make the browser able to operate with the server being offline. This may in fact be a mistaken model because a truly offline client should actually have a mini version of the server running locally. 

If we make this choice, then the browser becomes genuinely just a view, and to go offline, we become properly offline with a full-blown server. The issue seemed to be that the browser was never going to be fully offline, and so making the browser survive a little bit of offline is not that much use to anyone, but also is against the design goals of the browser web APIs. 

So its hard going for something that isn't that valuable. 

The front end  can be packaged up in formats like Electron or Android apps where the browser frontend still presents the visuals, and the heavier backend does the data storage and calculation. 

Deeper means that all heavy calculations should occur on the server-side where it has direct low-latency access to data. The browser becomes almost completely dead in the water if it loses connection to the server. 

The other option is to download ALL the data, and run all calculations locally, but this requires a step change when the data gets past some point in size, so hence it is best to run all operates thru the server.