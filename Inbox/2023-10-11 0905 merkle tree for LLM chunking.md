
>[!tip] Created: [2023-10-11 Wed 09:05]

>[!question] Targets: 

>[!danger] Depends: 

This is like zettlekasken for LLMs.

Even a human cannot process large files and do comparisons between large chunks of info without some kind of artefact, like a piece of paper, or some mapreduce type of approach.

Selling access to these preprocessed trees that were verifiably computed would save money on recomputing them, since the gpu costs are heavier than storage.  This cost saving can enable them to be vast and index the existing internet in this way.


Pass a large file in, break it up with a given chunk size, and overlap.
Repeat this process across multiple files, rolling up the summary of each part.
Each summary is broken into chunks - these chunks go into embeddings and are searched for nearness so deduplication can be done.
Dedupe processing involves comparing nearness chunks and comparing each one for meaning, not exactness.  This optimizing can be redone using idle or cheap calls.
Ultimately it rolls up into a top level summary of the file tree, with a summary rolled up of whatever was being extracted - meaning, value, shares of attribution, etc.
Basically a transform process that wrangles the knowledge into a more standardized format, so it can be accessed more readily.

This could be used to do depth as well, using the history of the tree, to work out who is due for each part.



For attribution across a whole 

Code might use a [[Pseudocode Intermediary]]

Process function that generates the purpose of the type of embeddings to create, then processes all the files until the requested embeddings are created and stored.

Then run it again with exactly middle boundaries, and compare the result, and see if anything was lost due to aliasing.

Use the LLM to determine suitable chunk boundaries within a body of text, and to provide a wrapper over the whole text that captures anything not explicitly extracted.



LLMs seem to be like humans in that they can only hold a small concentration window, and they need mechanical help to move their window around.  Model is like a tape machine where the LLM is akin to a human with a small but flawless memory.

LLMs and human output are approaching indistiguishability, and so we need to treat both with the exact same respect and attribution rules.  The rate of AI output is so high, that we must automate the attribution.

CRM AI that sits on the website itself and lets people interact directly to guide them thru the signup and management process.  Authenticate people by getting them to reply to the email address they enter, with any response at all.  Email includes a link to the chat, in case it wasn't them.

CRM can let you take a photo of your credit card and then it ask some questions about the card and the cvc.  This data is masked.

Firewall that is intelligent and looks over the meaning of the data changes and reads that are happening.  So who cares about network traffic, we only care about the meaning of the data that is changing.

If a service is fronted by an AI, then we can make an app that searches for relevant services in the background, and interacts with them all.  It also is made aware of changes you want to make, and can draw on the experience of others so when you make any kind of change in your live, it computes all the repercussions and manages your services accordingly.  This makes a great marketplace by making an entirely new way to interface with the vendors and customers.

Can scrape an existing set of records out by walking one at a time and converting to a standard format, then updating the standard format each time a new one is processed and doesn't fit, where the output is either the standard format populated so we can query it, and / or a modification to the standard template.  So the format defines the full schema for the entries, and each entry is a conversion to the existing schema.  Make a simple tool that continually tests the schema and feeds back the error until the schema is compliant.

Run the embeddings thru gpt first to ensure that all keywords and concepts are accurately expressed in each section.

Use a mapreduce approach where the section to be summarized is included in the summary, with a weight parameter, so the summary includes info that might be needed to make the summary in the current section (approach suggested by openai).  We could then run it backwards and see if we missed anything or if things are meaningfully the same.