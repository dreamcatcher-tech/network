
>[!tip] Created: [2024-01-02 Tue 17:27]

>[!question] Targets: 

>[!danger] Depends: 

If we can run an LLM, so take a call to gpt3.5 as an example, then we could make a simple voting system where each LLM votes on what the best system action to do is, and a simple quorum is used where this quorum is followed by the LLM.

The messages are exchanged via the LLMs, and then the output is interpreted by the LLM, so the logic is always in plain text.  This way, the voting is very simple and can be quite slow as a few seconds is perfectly fine.

Once all the LLMs have signed off, this represents the action that they will all agree to take.

So how many processes to spin up in lambda would be decided by the LLMs.

This means that a highly complex system of governance can be coded up and executed very quickly.  Provided the means for async message receiving is available, which sounds like a simple model to make using libp2p and a markdown message format.

Then so long as we could replay and analyze the way things went, with the help of AI tools, we could then craft improvements in the design rapidly, much faster than in code.  We could also in parallel be running a TLA+ model checker as well, that was kept automatically in sync with the design.  It assumes the LLM is trustworthy and correct, which whilst not perfect, will eventually be correct and gives us an incredible power boost at the start.

The quorum could handle hallucinations of a good diversity of models was provided.  To run you would first reach quorum with your own species, and then inter species votes would occur.

Whatever the transaction you wanted to do, the LLMs could look at it and ask you if you really meant to do that, if you had the default safety settings set on.

So no more code, just plain text instructions and a few highly tested functions for the LLM to call out on.  The heart of the program becomes AI, with just the extremities and integrations using the software of old, which is made so small as to be parsed by the AI and tested automatically using AI.

AI workbench to make very small but functional pieces of pure code.

Suggest we make an initial implementation of the tendermint algorithm in this way, and see how things fare.  There should be a scenario workbench where we propose different sequences of events, then have the AI generate deriviatives, and then show how the system performs under these conditions.

All messages being passed are submitted to a public git repo which is instantly gossiped so we can know immediately how things are going, and can always replay and analyze something, with prizes for corrections being issued.