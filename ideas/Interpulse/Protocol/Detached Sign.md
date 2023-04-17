
>[!tip] Created: [2023-04-17 Mon 11:25]

>[!question] Targets: 

>[!danger] Depends: 

Signatures should be a chain that is independent of content.  Content should include hashes of prior content, but signatures should be pointing only to the content, and the prior signatures.

A Pulse is defined by something that is validly signed.  A Pulse need not include prior hashes of previously signed things, and may not include hashes to prior content either, so long as the signatures contain this, however for ease of replay, prior content hashes are included, so validators can catch up.

Detaching in this way allows content to produced rapidly, and then merged together, where signatures can be skipped to allow catchup between validators.  If everyone agrees on the content, then the signatures can arrive out of order.

We can use Schnorr signatures to allow the size of the signature to not increase with the number of participants.