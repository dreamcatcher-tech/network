
>[!tip] Created: [2024-03-13 Wed 22:19]

>[!question] Targets: 

>[!danger] Depends: 

We should be able to make vault apps and have reasonable trust in their security.
We could run these isolates in enclaves only, for added protection, showcasing our properties.

Use webauthn to get strong key storage on devices.

Feature is to let a team of people share a password database, and have versions and updates showing to all.

This should not need a central server.  If webrtc was used, it could be stored on a collection of browsers, and should advise you on the replication score of the database currently, and connections to other peers.  You can also purchase a peer to automatically store your encrypted data.

Lets you send private messages to each other by way of updating a shared state.

Lets you have good password management at a fraction of the cost, using web standards like enclaves to secure the data.

[[2024-03-14 1609 the users high castle|High Castle]] can be used to allow a group of people to operate as a single entity from the point of view of a service.  Single billing, multiple people can supply payment options in.  Access and password can only be done using high castle with multiple agreements.

We can integrate with their APIs to give this multiparty access some power.

We can use devices to securely store private keys, and then encrypt data and store on artifact.  Make a safe device that we keep in cold storage that has its keys stored in an enclave.

Key rotation by getting the cold storage unit to sign a transfer item that passes its lineage on to a new set of keys.

So in this way, whilst we strive to keep artifact private, we are not busted if the data is compromised.  If the platform is compromised, it might coerce the keys to be used to decrypt something then send it offsite.  So as long as we keep the static parts of the page secured, using lavamoat, then we can trust that the keys will never be abused.  Basically need to ban any transmission of decrypted data.

So highly secure data can be used on our system, even tho we don't fully trust our infrastructure, as the encryption piece keeps the rest of it safe.  Best effort infrastructure coupled with on device encryption.

Could also only store the secure data on the local browser, rather than public artifact, then allow some highly trusted machines to be kept secure and keep a copy for availability.

Benefit of using artifact as password manager is that some passwords could be dao controlled, and need multiple people to unlock. 
Also, best, some services can be bonded to API control, and then the password manager is used to do multiparty actions, so that control of important things, like domain names, can be managed in this way.  Also top level root account controls can be handled by the password manager.

We could also be the billing target, so something like AWS would bill us directly, and we would bill customers, so that we would handle billing disputes.