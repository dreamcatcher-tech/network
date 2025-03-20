
>[!tip] Created: [2025-03-20 Thu 19:46]

>[!question] Targets: 

>[!danger] Depends: 

Over the top of the blockchain layer, we may need to implement a separate ephemeral real-time layer that is not blockchain but might optionally be snapshotted from time to time. This would give better utility for the system where the blockchain could indicate heavy, large setup things, and then this communication framework stuff that people don't care too much about would sit on top.

An example might be playing a video game. The blockchain bit would be set up (starting the game, periodically saving the game), but the video stream would go back to the client without really being a blockchain as such. We could snapshot the inputs and the outputs and the timing and see what video came back, but really it's not that important. You know, so you know we could log the keystrokes and store them down periodically just for some kind of a reference. But in general, the snapshotting is hard for an in-ram program like this. We might snapshot the RAM itself, but ultimately it seems very useful to have this lightweight layer on top that can be blockchain'd if we want but it is optional. 