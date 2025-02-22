
>[!tip] Created: [2025-02-22 Sat 21:23]

>[!question] Targets: 

>[!danger] Depends: 

Be great if deploy could act like a browser proxy.

So two browsers could talk directly to each other via a websocket that was set up between the two deno isolates they connected to.

We could use the broadcast channel to signal to other isolates to negotiate how to set up this connection, and then two browsers are talking to each other.

Or, we could set up webrtc between the two browser directly, using the broadcast channel to broker the connection.

