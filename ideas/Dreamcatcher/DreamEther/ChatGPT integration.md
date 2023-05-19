If we made a plugin for chatGPT, then we could let people write packets consersationally.
Images could be generated alongside the prompt.

As they are writing their packets, we can be suggesting edits that would write for them, and can be generating images that summarize what they are writing.  Summaries are always auto generated, to ensure a consistent standard of summarization.

Search can be done using natural language across all packets.

Ask questions to find types of packets, find people who can write types of packets for you, and estimate chances of success, estimate length of time for things, and back up those answers.

Try turn a conversation into a packet.

Packet name generation that does not collide with anything else.

Auto insert references to the dictionary for new terms.  Detect and highlight new terms and provide definitions down the side, or ask for some to be submitted if not present.

Write a packet that is missing that it thinks is a useful high value thing.

Packet value estimation.

Extracting pure problem statements, or at least scoring the purity.

from Mr. Maxwell 2022-07-21:
> Imagine a world where you give some free text description of your recycling bin lorry business and the problem, it generates the Request, which generates proposed ideas, matches with existing packets and writes the code for the missing parts using AlphaCode or similar, then passes it off to a human QA to make sure the original Intent was met...  App in One Day.
> 
> We are currently generating the learning set for how innovation works.  Then use that to leverage AI at the innovation network layer.  I don't see anyone else thinking about innovation as a timeseries progression of network interactions that produce discrete reusable packets, while recording the interactions for use as a learning set.
> 
> Imagine "Build an app that tracks the chemical explosion at X, considers local information including population density, weather and geography, provides advice on HazMat requirements, population exposure, areas of greatest need, local resources available and ranks in terms of acute and chronic lethality."
> 
> Hyper-bespoke immediate software harnessing everything that has been built to build anything that needs to be built
> 
> There's something here that rings of iso/osi layers.  There's either a new stack by which  we can show the above concept or possibly an extension above the current stack.



We should set this vision up as a packet and chuck some funding against it.

## Privacy
AI can redact the text of data so that differential privacy can be offered for different classes of packets.  [The Redaction](https://app.edenai.run/bricks/text/anonymization) can link to chain objects that are used to replace the tokens with a chainId, or masked completely.

## AI QA
Packets can have their keywords automatically extracted, so the classification is not up to humans.
The meaning can be compared across all other packets and a distance calculated, with a number of routes.  Hopefully smaller packets can be suggested for extraction. https://app.edenai.run/bricks/text/keyword-extraction

## Examples
Given this piece of code with this git history, and these function inputs, how would you attribute what the caller paid to each developer ?  Why did you think that ?