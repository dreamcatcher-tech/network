
>[!tip] Created: [2024-04-09 Tue 16:27]

>[!question] Targets: 

>[!danger] Depends: 

Client generates Artifact keys in the browser.
Pubkey goes to the server.
Challenge from server is the signing of the pubkey with the webauthn credential.

Each time we challenge auth, new keys are generated and embelished with the webauthn proof.

Storing these proofs on chain is how we know the signing keys are valid.
Then, each pierce gets signed before transmission.
So each action, we have the signature from the device giving us the audit trail, along with ip address and other info that is used to generate fingerprinting, so we know when we need to do a new auth challenge.