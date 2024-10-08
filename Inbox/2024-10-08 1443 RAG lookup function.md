
>[!tip] Created: [2024-10-08 Tue 14:43]

>[!question] Targets: 

>[!danger] Depends: 

agents should be able to call on the knowledge base.  They should be able to find info, narrow things down, and present back a summary of the full text.  It should be stitched together from multiple sources.

Trigger a napp so that it goes and intelligently trawls the info, with parallel processes when it finds them.  Basically a retrieval system not intended to be injecting into the prompt, but is a deliberate search for info.

So it is not instant, and doesn't worry about vector chunking, as it processes the full text thru the llm to get the absolute most relevant parts.

The knowledge is constructed in a tree, which the bots know how to navigate easily.

So when learning about the system they are running on, agents pull in the knowledge graph and provide relevant responses.

The retrieval system produces canonical reference text that the agent uses to compose its responses.

The icon of a rag search should be a green glowing book.