
>[!tip] Created: [2024-07-01 Mon 14:28]

>[!question] Targets: 

>[!danger] Depends: 

If we stored what the last known session file was in the session storage of a tab, then we could revive it quickly without waiting to get the latest version from the server.

If a later version came, we would just rewrite this key with the new hash, and then GET the latest item from the server, which would cache it again.