
>[!tip] Created: [2023-02-24 Fri 14:31]

>[!question] Targets: 

>[!danger] Depends: 

For log streams, voice and video calls, it is useful to send the data before waiting for a block.

We can send the actions as a stream during the block creation and then

The recipient can be inserting these actions pre-emptively, without the pulse checking, and only once the interpulse is received do they do the actual check on the interpulse.  If a discrepancy is found, then the block is used as the reference.

Be able to send actions using UDP and some crude retransmit info.  Allows using the QUIC protocol.