
>[!tip] Created: [2023-04-27 Thu 09:59]

>[!question] Targets: [[R24#Encryption]]

>[!danger] Depends: 

Each chain needs an encryption key the posession of which is required to read the stored contents of that chain.  When blocks are requested, they are implicitly encrypted with this key.

The key should only be stored in the approot, and rotation / ratcheting should occur only there.  Each new pulse should ratchet the key forwards so that forwards secrecy is assured.

No data at rest should be in plain text, and so the hashing of the Pulses should be in reference to the hash of the encrypted data.

Reading by validators outside of the approot validator set should be transmitted in the open, relying on the libp2p encryption to only be readably by the peerId the connection was built for.

On the receiving side, the validator is reponsible for encrypting the received data with the key of the approot of the mount point that the data is mounted on.