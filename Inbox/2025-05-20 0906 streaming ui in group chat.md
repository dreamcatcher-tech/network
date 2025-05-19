
>[!tip] Created: [2025-05-20 Tue 09:06]

>[!question] Targets: 

>[!danger] Depends: 

if we can allow any number of people to find the stream, then we should do this all the time, so that we can run the compute anywhere we want, and the people will find it.

Seems only possible by way of a nats stream ? the key is that the participants need an id to go discover.  This would probably be the agent stream id or the chat id ?

then using nats, we would find the address of the server that was running it, and we would connect to that server, so we could stream down the responses.

We will need to buffer the stream so that we can restart it when newcomers join.

there is repeatably a need for streaming some overlay ephemeral / in progress / realtime / transient data.  This eventually lands in a permanet commit, but audits are always rear looking.