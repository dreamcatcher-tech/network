
>[!tip] Created: [2025-04-28 Mon 13:27]

>[!question] Targets: 

>[!danger] Depends: 

The issue is that the customer data is now sitting on the browsers.

We could encypt it, and pull the key from the server.

also we could use the buckets api and add an expiry.

use the login key as the encryption value.  ultimately we need a secret related to the user, that they need to get from the server first, and then keep in ram only to gain access to the encrypted store.