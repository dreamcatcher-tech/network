
>[!tip] Created: [2024-10-09 Wed 13:22]

>[!question] Targets: 

>[!danger] Depends: 

Each time it talks to a different bot, it is managing a new thread.

So the bot only has to be smart enough to do topic detection.

It will decide if it should call a reasoner with the thread being continued on.

It could make multiple calls to multiple reasoners with different temp settings and then evaluate which response was the best.

