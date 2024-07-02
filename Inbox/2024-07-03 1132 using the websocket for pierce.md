
>[!tip] Created: [2024-07-03 Wed 11:32]

>[!question] Targets: 

>[!danger] Depends: 

Websocket needs to go thru a handshake anyway.
Bearer tokens are annoying, since we need to store them securely.

Since there is always a websocket running as a subscription anyway, and since we are going to share it between all tabs, then we might as well use that as getting pierce actions in as well ?

But then requests to get binary data can't be done over the websocket too ?
Unless there was a second payload websocket ?

What about getting the payloads to be pulled direct from backblaze or S3 ?

We could store some tokens in the db, and look these up when the client makes a GET request, or just check the signature on the token, and set a very low expiry time, like a few minutes.
Provide one off signed tokens along with the subscription result to allow the user to fetch the file for x minutes.