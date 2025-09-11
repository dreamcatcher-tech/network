
>[!tip] Created: [2025-09-12 Fri 10:29]

>[!question] Targets: 

>[!danger] Depends: 

the gateway proxy with the public ssl cert has to be trusted as it is the relay.

the vm you want to reach, you may know its public key somehow, but you still need to trust the gateway vm.

could just use libp2p to identify the nodes behind the ssl proxy.

so it the attestation was done in the gateway, where it checked that the service vm was measuerd correctly, then it passes that to the browser, it is the same ?

the attestation report can be passed down to the browser, so the payloads and computations can be verified, but the difference is that the gateway actually saw the payload decrypted.

or the browser can generate a key, and have the other vm communicate that way ?

seems wasteful to tls twice, but it has to be that way if we don't want to double encyrpt.

otherwise the gateway takes on a bit more load, and the client takes on double the encyrption load.

comms between gateway and service are tunneled over wireguard anyway.

so seems fine to do open comms where the gateway can see the plaintext.