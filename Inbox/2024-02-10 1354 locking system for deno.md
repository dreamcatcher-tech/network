
>[!tip] Created: [2024-02-10 Sat 13:54]

>[!question] Targets: 

>[!danger] Depends: 

Would set up broadcast channels to give the fastest response.
Then polling of keys.
Then would use watched keys.

Goal is the fastest resolution of lock contention, without thrashing the KV store.

Getting commit updates should be a double approach - broadcastchannel first, then watching db keys second.  The broadcast could save us some reads if it told use what was in the latest commit so we didn't have to watch for it.

