
>[!tip] Created: [2024-11-05 Tue 10:32]

>[!question] Targets: 

>[!danger] Depends: 

If we expose the interface as a napp, then we can get an AI to exercise the interface to see what the results of running it are.

It forces a clean interface.

At runtime, we could wire it up without all the checks on the json schema and other pieces, for the sake of speed and debug tracing.

It might be easier to hook it up using the json objects so we can then step thru it piece by piece ?

Could optionally turn on the exploded operations so that when we want to debug it, we put the fault up on the current version, and break apart the calls that are being made.

Would be replaying the calls from the git commits into a different version - a version that was being driven thru the json object process, so we could step it and analyze it.

Then pull out very specific pieces where we put a json object in and observe a fault, which narrows down the problem massively, and means the system is always able to be worked on in isolated pieces.

Plus maybe the AI can help us if it is focusable in little pieces like this.