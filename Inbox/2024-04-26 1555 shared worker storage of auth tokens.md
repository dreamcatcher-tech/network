
>[!tip] Created: [2024-04-26 Fri 15:55]

>[!question] Targets: 

>[!danger] Depends: 

Any new tab you open should already be authed

The home repo should be the thing that authenticates.

To start, we will store the keys in localstorage, to avoid looping around lots.

Using passkeys, they would first get a token from github that we would securely store.  Then they would generate a signing keypair for the session, and send up the pubkey signed by the passkey, which we would then accept if they had already completed auth at some earlier point.

So each session, make new keys, so the keys are never in storage.   Store them in the ram of a sharedworker.  Authenticate them using passkeys.