
>[!tip] Created: [2025-03-19 Wed 09:53]

>[!question] Targets: 

>[!danger] Depends: 

transmit needs to return the stream immediately  ?

Or it needs to wait for the next item ? or it can throw errors during the await ?

So when bridging over web, that would be a dedicated response, like an SSE.  Errors would be streamed down as an SSE too.  The client expects it to be a stream, by way of its schema definition.

On the client side, we would call transmit and wait for the outcome, but we would have started an async response already.

