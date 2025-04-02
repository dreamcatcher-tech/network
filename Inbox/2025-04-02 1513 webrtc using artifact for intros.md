
>[!tip] Created: [2025-04-02 Wed 15:13]

>[!question] Targets: 

>[!danger] Depends: 

Inside fly.io, we can provide the browser with the internal address and port of the machine that is running on your behalf.

Then, we can use artifact to store the locations of all the participants in the meeting.

This allows the machines to relay effectively since they know how to find each other.

So we then have high quality connections using quic between multiple machines, with the results being passed down to the respective browsers.

The result is low latency comms, with artifact storage, and bot processing happening by tee'ing the streams.