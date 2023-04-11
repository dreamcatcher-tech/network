
>[!tip] Created: [2023-03-26 Sun 21:44]

>[!question] Targets: 

>[!danger] Depends: 

With all Pulses cramming all the linked data into them in a flat array, we need to be able to send interpulses without wasting hashtime on internal transmissions, but also without losing privacy on the remote transmissions.

Approot sign the interpulse chunk directly, making it a dedicated piece.
This can avoid leaking path info.

Break out each interpulse transmission into a block, so that proof is the path down to that block.

Internally within the approot we should not bother to break out the transmissions.